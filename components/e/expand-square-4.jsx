import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3d8sv4oq.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3d8sv4oq"/>`,
		"fallback": "lineicons:expand-square-4",
	});
}

export default Component;
