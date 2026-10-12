import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mj08_6n_e.css';
import '../../css/d/dzb3u1bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mj08_6n_e"/><path class="dzb3u1bap"/></g>`,
		"fallback": "andrsrxn:arrow-corner-down-left",
	});
}

export default Component;
