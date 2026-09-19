import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpe9po6ap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpe9po6ap"/>`,
		"fallback": "heroicons:clipboard-document-list",
	});
}

export default Component;
