import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtgbfj9cn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtgbfj9cn"/>`,
		"fallback": "streamline:battery-empty-2",
	});
}

export default Component;
