import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x58rzoi6l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x58rzoi6l"/>`,
		"fallback": "oui:cross-in-circle-filled",
	});
}

export default Component;
