import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nnjqi97nv.css';
import '../../css/t/tzsaz1b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nnjqi97nv"/><path class="tzsaz1b6j"/></g>`,
		"fallback": "solar:bone-crack-line-duotone",
	});
}

export default Component;
