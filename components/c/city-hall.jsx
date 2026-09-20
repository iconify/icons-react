import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffx8j-san.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffx8j-san"/>`,
		"fallback": "streamline-flex:city-hall",
	});
}

export default Component;
