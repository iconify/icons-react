import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyfe-73fe.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyfe-73fe"/>`,
		"fallback": "f7:folder-badge-plus",
	});
}

export default Component;
