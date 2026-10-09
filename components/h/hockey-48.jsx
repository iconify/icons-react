import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igrsxkh2x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igrsxkh2x"/>`,
		"fallback": "energy-icons:hockey-48",
	});
}

export default Component;
