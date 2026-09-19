import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d06n8p3wu.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d06n8p3wu"/>`,
		"fallback": "fa6-solid:euro-sign",
	});
}

export default Component;
