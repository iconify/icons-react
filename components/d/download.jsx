import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke28hy4he.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke28hy4he"/>`,
		"fallback": "fa-solid:download",
	});
}

export default Component;
