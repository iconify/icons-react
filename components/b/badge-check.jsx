import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyl9qceen.css';
import '../../css/k/k02-v4bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyl9qceen"/><path class="k02-v4bci"/>`,
		"fallback": "pixel:badge-check",
	});
}

export default Component;
