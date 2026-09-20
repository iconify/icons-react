import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylugz1g1j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ylugz1g1j"/>`,
		"fallback": "pajamas:fork",
	});
}

export default Component;
