import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f635f9k-l.css';
import '../../css/b/bx7cagbuz.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f635f9k-l"/><path class="bx7cagbuz"/>`,
		"fallback": "medical-icon:i-smoking",
	});
}

export default Component;
