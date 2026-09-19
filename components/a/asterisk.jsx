import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfo7nws-h.css';

const viewBox = {"width":348,"height":719};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfo7nws-h"/>`,
		"fallback": "ls:asterisk",
	});
}

export default Component;
