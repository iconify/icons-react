import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh3-93bby.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oh3-93bby"/>`,
		"fallback": "streamline-color:fahrenheit-flat",
	});
}

export default Component;
