import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbh3twb1j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbh3twb1j"/>`,
		"fallback": "carbon:chart-spiral",
	});
}

export default Component;
