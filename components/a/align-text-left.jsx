import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf20193bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf20193bw"/>`,
		"fallback": "humbleicons:align-text-left",
	});
}

export default Component;
