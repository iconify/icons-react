import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mmt_1abfi.css';
import '../../css/h/hnhxatb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mmt_1abfi"/><path class="hnhxatb8b"/></g>`,
		"fallback": "streamline-ultimate:accounting-coins",
	});
}

export default Component;
