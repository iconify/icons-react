import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twd58db8o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="twd58db8o"/>`,
		"fallback": "heroicons-solid:check-badge",
	});
}

export default Component;
