import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8ubvfbil.css';
import '../../css/u/uyme-uvxc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8ubvfbil ouiIcon__fillSecondary"/><path class="uyme-uvxc"/>`,
		"fallback": "oui:app-discover",
	});
}

export default Component;
