import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dsinquy4n.css';
import '../../css/f/facr_4rzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dsinquy4n"/><path class="facr_4rzv"/></g>`,
		"fallback": "streamline-ultimate:award-badge-star",
	});
}

export default Component;
