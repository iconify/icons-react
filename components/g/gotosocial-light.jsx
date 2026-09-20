import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzy7uyvnw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzy7uyvnw"/>`,
		"fallback": "selfhst:gotosocial-light",
	});
}

export default Component;
