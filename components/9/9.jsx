import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd3llo6lq.css';

const viewBox = {"width":455,"height":782};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd3llo6lq"/>`,
		"fallback": "ls:9",
	});
}

export default Component;
