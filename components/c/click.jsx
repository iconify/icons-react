import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj2dy6ioy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yj2dy6ioy"/>`,
		"fallback": "file-icons:click",
	});
}

export default Component;
