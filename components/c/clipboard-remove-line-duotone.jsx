import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zkn3xyt6c.css';
import '../../css/m/my5268blj.css';
import '../../css/c/c7hfprbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zkn3xyt6c"/><path class="my5268blj"/><path class="c7hfprbvc"/></g>`,
		"fallback": "solar:clipboard-remove-line-duotone",
	});
}

export default Component;
