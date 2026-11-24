import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhxzawb3p.css';
import '../../css/f/f8paaybnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhxzawb3p"/><path class="f8paaybnb"/>`,
		"fallback": "lucide-extended:book-open-check-filled",
	});
}

export default Component;
