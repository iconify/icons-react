import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxjodwbrk.css';
import '../../css/e/e132nkbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxjodwbrk"/><path class="e132nkbef"/>`,
		"fallback": "eva:cloud-upload-outline",
	});
}

export default Component;
