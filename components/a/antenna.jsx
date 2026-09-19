import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn1j3bxoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn1j3bxoq"/>`,
		"fallback": "hugeicons:antenna",
	});
}

export default Component;
