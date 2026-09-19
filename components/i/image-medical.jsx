import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj_f8me5y.css';
import '../../css/l/ljxqdzyof.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj_f8me5y"/><path class="ljxqdzyof"/>`,
		"fallback": "carbon:image-medical",
	});
}

export default Component;
