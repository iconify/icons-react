import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luhxm1b2v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luhxm1b2v"/>`,
		"fallback": "streamline:battery-full-1",
	});
}

export default Component;
