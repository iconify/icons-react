import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsbsut0lj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsbsut0lj"/>`,
		"fallback": "streamline:blank-notepad",
	});
}

export default Component;
