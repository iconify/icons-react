import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8pgvmb9s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k8pgvmb9s"/>`,
		"fallback": "heroicons-solid:arrows-right-left",
	});
}

export default Component;
