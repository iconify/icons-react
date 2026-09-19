import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irb2c6www.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irb2c6www"/>`,
		"fallback": "fa7-solid:franc-sign",
	});
}

export default Component;
