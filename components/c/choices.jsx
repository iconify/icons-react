import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf72p_bzk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf72p_bzk"/>`,
		"fallback": "carbon:choices",
	});
}

export default Component;
