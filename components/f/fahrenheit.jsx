import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as1fvkbzl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as1fvkbzl"/>`,
		"fallback": "streamline-flex:fahrenheit",
	});
}

export default Component;
