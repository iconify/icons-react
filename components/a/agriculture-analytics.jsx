import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo65a95px.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo65a95px"/>`,
		"fallback": "carbon:agriculture-analytics",
	});
}

export default Component;
