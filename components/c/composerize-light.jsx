import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si0pir4by.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si0pir4by"/>`,
		"fallback": "selfhst:composerize-light",
	});
}

export default Component;
