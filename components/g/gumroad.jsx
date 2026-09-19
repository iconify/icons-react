import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di9j7lb2u.css';

const viewBox = {"width":595,"height":694};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di9j7lb2u"/>`,
		"fallback": "ls:gumroad",
	});
}

export default Component;
