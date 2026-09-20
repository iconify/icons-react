import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw6ek34qs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw6ek34qs"/>`,
		"fallback": "streamline-flex:crown",
	});
}

export default Component;
