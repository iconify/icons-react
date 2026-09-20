import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtmg25neu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qtmg25neu"/>`,
		"fallback": "streamline:credit-card-1-remix",
	});
}

export default Component;
