import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwju7lbng.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwju7lbng"/>`,
		"fallback": "fluent-emoji-flat:diamond-suit",
	});
}

export default Component;
