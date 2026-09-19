import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo4v4hbni.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oo4v4hbni"/>`,
		"fallback": "heroicons-solid:arrow-up-on-square-stack",
	});
}

export default Component;
