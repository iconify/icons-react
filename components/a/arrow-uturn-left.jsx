import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1zwhfbgv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n1zwhfbgv"/>`,
		"fallback": "heroicons-solid:arrow-uturn-left",
	});
}

export default Component;
