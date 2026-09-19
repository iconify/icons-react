import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9yhs_54b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9yhs_54b"/>`,
		"fallback": "bx:bx-objects-vertical-top",
	});
}

export default Component;
