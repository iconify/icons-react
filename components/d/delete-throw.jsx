import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/te8vmacae.css';
import '../../css/m/mu7m3-bif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="te8vmacae"/><path class="mu7m3-bif"/></g>`,
		"fallback": "hugeicons:delete-throw",
	});
}

export default Component;
