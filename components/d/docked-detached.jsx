import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xno89sb5c.css';
import '../../css/e/e0093cbza.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xno89sb5c"/><rect class="e0093cbza"/>`,
		"fallback": "oui:docked-detached",
	});
}

export default Component;
