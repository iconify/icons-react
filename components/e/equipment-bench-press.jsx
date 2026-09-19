import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn3tp5ssv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn3tp5ssv"/>`,
		"fallback": "hugeicons:equipment-bench-press",
	});
}

export default Component;
