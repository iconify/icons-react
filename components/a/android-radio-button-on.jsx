import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp0_6tmzb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp0_6tmzb"/>`,
		"fallback": "ion:android-radio-button-on",
	});
}

export default Component;
