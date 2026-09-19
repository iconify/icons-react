import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vyow_4b8c.css';
import '../../css/u/u973iv91c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vyow_4b8c"/><path class="u973iv91c"/></g>`,
		"fallback": "iconoir:half-cookie",
	});
}

export default Component;
