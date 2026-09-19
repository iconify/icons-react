import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp1zs-blg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp1zs-blg"/>`,
		"fallback": "hugeicons:cursor-add-selection-01",
	});
}

export default Component;
