import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/girn4kpqj.css';

const viewBox = {"width":384,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="girn4kpqj"/>`,
		"fallback": "ps:align-right",
	});
}

export default Component;
