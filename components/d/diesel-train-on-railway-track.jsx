import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-hwp71hy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-hwp71hy"/>`,
		"fallback": "pinhead:diesel-train-on-railway-track",
	});
}

export default Component;
