import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdr-nrbjf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdr-nrbjf"/>`,
		"fallback": "carbon:3d-print-mesh",
	});
}

export default Component;
