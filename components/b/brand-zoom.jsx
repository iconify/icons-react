import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf1ps_r9e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hf1ps_r9e"/>`,
		"fallback": "pajamas:brand-zoom",
	});
}

export default Component;
