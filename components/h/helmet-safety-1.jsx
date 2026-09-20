import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p97i2jbqj.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p97i2jbqj"/>`,
		"fallback": "lineicons:helmet-safety-1",
	});
}

export default Component;
