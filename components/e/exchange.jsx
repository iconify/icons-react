import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m68980b9q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m68980b9q"/>`,
		"fallback": "fa7-solid:exchange",
	});
}

export default Component;
