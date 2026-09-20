import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng7w36b3p.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng7w36b3p"/>`,
		"fallback": "memory:checkbox-intermediate-variant",
	});
}

export default Component;
