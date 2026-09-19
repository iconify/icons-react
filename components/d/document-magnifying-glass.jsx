import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn60bfk9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn60bfk9h"/>`,
		"fallback": "heroicons-outline:document-magnifying-glass",
	});
}

export default Component;
