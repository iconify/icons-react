import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ov2f79ppf.css';
import '../../css/o/olt-_65_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ov2f79ppf"/><path class="olt-_65_n"/></g>`,
		"fallback": "iconoir:align-top-box-solid",
	});
}

export default Component;
