import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zonfracxa.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zonfracxa"/>`,
		"fallback": "fluent-mdl2:contact-card-settings",
	});
}

export default Component;
