import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbkbw5byj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbkbw5byj"/>`,
		"fallback": "f7:arrow-uturn-right-square",
	});
}

export default Component;
