import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh06vnbum.css';
import '../../css/h/htce_l0gk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh06vnbum"/><path class="htce_l0gk"/>`,
		"fallback": "carbon:catalog",
	});
}

export default Component;
