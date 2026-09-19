import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb6plsb-n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb6plsb-n"/>`,
		"fallback": "fa7-solid:car",
	});
}

export default Component;
