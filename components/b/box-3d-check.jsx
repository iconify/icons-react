import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pgsbftbew.css';
import '../../css/q/q3_x03l7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pgsbftbew"/><path class="q3_x03l7v"/></g>`,
		"fallback": "mage:box-3d-check",
	});
}

export default Component;
