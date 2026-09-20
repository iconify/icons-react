import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5a7vubch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5a7vubch"/>`,
		"fallback": "selfhst:adobe-firefly-dark",
	});
}

export default Component;
