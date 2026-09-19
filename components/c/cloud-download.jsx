import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bibu84b4z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bibu84b4z"/>`,
		"fallback": "heroicons-solid:cloud-download",
	});
}

export default Component;
