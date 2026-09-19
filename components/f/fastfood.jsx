import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6bi2lk6s.css';
import '../../css/x/xloc_vq6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6bi2lk6s"/><path class="xloc_vq6r"/>`,
		"fallback": "cil:fastfood",
	});
}

export default Component;
