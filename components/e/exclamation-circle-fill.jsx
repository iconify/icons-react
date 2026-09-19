import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js2wifbhm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js2wifbhm"/>`,
		"fallback": "ant-design:exclamation-circle-fill",
	});
}

export default Component;
