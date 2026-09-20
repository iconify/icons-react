import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/yryxcsblp.css';
import '../../css/h/he-at61yg.css';
import '../../css/b/bbkk_ibmc.css';
import '../../css/y/y7t6j-0zu.css';
import '../../css/s/szj910zev.css';
import '../../css/v/v-3cn2bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="yryxcsblp"/><path class="he-at61yg"/></g><path class="bbkk_ibmc"/><path class="y7t6j-0zu"/><path class="szj910zev"/><path class="v-3cn2bgi"/></g>`,
		"fallback": "solar:balls-bold-duotone",
	});
}

export default Component;
