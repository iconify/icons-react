import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs7v8dblj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs7v8dblj"/>`,
		"fallback": "streamline:fahrenheit",
	});
}

export default Component;
