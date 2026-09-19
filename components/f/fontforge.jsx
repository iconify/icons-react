import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crspx5bum.css';

const viewBox = {"width":450,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crspx5bum"/>`,
		"fallback": "file-icons:fontforge",
	});
}

export default Component;
