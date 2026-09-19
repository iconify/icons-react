import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es35w10kr.css';
import '../../css/j/jzeym_btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es35w10kr"/><path class="jzeym_btr"/>`,
		"fallback": "boxicons:guitar-amp-filled",
	});
}

export default Component;
