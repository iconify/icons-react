import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz6mhscer.css';
import '../../css/i/i7nmstb0v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz6mhscer ouiIcon__fillSecondary"/><path class="i7nmstb0v"/>`,
		"fallback": "oui:app-canvas",
	});
}

export default Component;
