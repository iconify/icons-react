import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdezwjb_s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdezwjb_s"/>`,
		"fallback": "raphael:bolt",
	});
}

export default Component;
