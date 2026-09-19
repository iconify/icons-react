import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq_qswbdu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq_qswbdu"/>`,
		"fallback": "carbon:bottom-panel-close-filled",
	});
}

export default Component;
