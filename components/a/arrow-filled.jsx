import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twku4hbjt.css';

const viewBox = {"width":12,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twku4hbjt"/>`,
		"fallback": "weui:arrow-filled",
	});
}

export default Component;
