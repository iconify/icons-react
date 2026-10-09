import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khd4an8mp.css';
import '../../css/d/dqca1ac-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khd4an8mp"/><path class="dqca1ac-v"/>`,
		"fallback": "energy-icons:biofuel-48-bold",
	});
}

export default Component;
