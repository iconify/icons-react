import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka1p2wyfl.css';
import '../../css/n/ng_udhb8v.css';
import '../../css/g/g4-q86_8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka1p2wyfl"/><path class="ng_udhb8v"/><path class="g4-q86_8e"/>`,
		"fallback": "prime:home",
	});
}

export default Component;
