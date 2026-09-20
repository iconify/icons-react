import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w76dcob_w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w76dcob_w"/>`,
		"fallback": "streamline-flex-color:increase-indent",
	});
}

export default Component;
