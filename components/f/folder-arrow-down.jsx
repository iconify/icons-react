import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rld_-7kyk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rld_-7kyk"/>`,
		"fallback": "heroicons-solid:folder-arrow-down",
	});
}

export default Component;
