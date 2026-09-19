import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dzsqvm3vy.css';
import '../../css/m/mqc-ygb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dzsqvm3vy"/><path class="mqc-ygb_f"/></g>`,
		"fallback": "iconoir:align-right-box-solid",
	});
}

export default Component;
