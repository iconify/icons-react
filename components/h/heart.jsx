import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiw9yhqzr.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiw9yhqzr"/>`,
		"fallback": "memory:heart",
	});
}

export default Component;
