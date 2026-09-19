import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm5x-vbjq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm5x-vbjq"/>`,
		"fallback": "fa7-brands:cc-diners-club",
	});
}

export default Component;
