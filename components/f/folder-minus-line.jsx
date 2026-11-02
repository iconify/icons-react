import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqk1bib6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqk1bib6s"/>`,
		"fallback": "mingcute:folder-minus-line",
	});
}

export default Component;
