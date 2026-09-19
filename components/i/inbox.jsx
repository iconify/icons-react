import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pre42p12x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pre42p12x"/>`,
		"fallback": "bi:inbox",
	});
}

export default Component;
