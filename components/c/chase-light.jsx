import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpcox3bgi.css';

const viewBox = {"width":1000,"height":141.83};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpcox3bgi"/>`,
		"fallback": "thesvg-color:chase-light",
	});
}

export default Component;
