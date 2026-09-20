import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdeddab-y.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdeddab-y"/>`,
		"fallback": "memory:clock-fill",
	});
}

export default Component;
