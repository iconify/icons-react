import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu-q_73ca.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu-q_73ca"/>`,
		"fallback": "ix:inquiry",
	});
}

export default Component;
