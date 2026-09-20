import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg4ufqbbh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sg4ufqbbh"/>`,
		"fallback": "ix:app-document",
	});
}

export default Component;
