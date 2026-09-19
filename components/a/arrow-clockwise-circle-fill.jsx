import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hotf6gb9y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hotf6gb9y"/>`,
		"fallback": "f7:arrow-clockwise-circle-fill",
	});
}

export default Component;
