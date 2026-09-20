import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raieccc2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raieccc2a"/>`,
		"fallback": "mage:gift",
	});
}

export default Component;
