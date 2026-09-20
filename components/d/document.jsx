import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj8s9obmn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj8s9obmn"/>`,
		"fallback": "oui:document",
	});
}

export default Component;
