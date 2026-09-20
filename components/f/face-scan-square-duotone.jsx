import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-i3eab9r.css';
import '../../css/s/szuo8joqg.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/h3mjk49tp.css';
import '../../css/x/xcwc6pbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a-i3eab9r"/><path class="szuo8joqg"/><g class="mc2zb0bvp"><path class="h3mjk49tp"/><path clip-rule="evenodd" class="xcwc6pbmg"/></g></g>`,
		"fallback": "reicon:face-scan-square-duotone",
	});
}

export default Component;
