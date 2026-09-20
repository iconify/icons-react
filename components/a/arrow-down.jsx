import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og140ebiy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og140ebiy"/>`,
		"fallback": "oui:arrow-down",
	});
}

export default Component;
