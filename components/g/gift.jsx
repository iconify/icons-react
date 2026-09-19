import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8ar4sc7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8ar4sc7c"/>`,
		"fallback": "icons8:gift",
	});
}

export default Component;
