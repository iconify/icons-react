import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrojnzb8s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rrojnzb8s"/>`,
		"fallback": "ix:align-object-width",
	});
}

export default Component;
