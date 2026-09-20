import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc5h0rrus.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc5h0rrus"/>`,
		"fallback": "streamline:diamonds-symbol",
	});
}

export default Component;
