import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9c5oyb5t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9c5oyb5t"/>`,
		"fallback": "streamline-flex:button-power-1",
	});
}

export default Component;
