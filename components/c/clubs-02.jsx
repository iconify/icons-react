import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi3eqrf6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi3eqrf6i"/>`,
		"fallback": "hugeicons:clubs-02",
	});
}

export default Component;
