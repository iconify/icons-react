import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlrvlsb9a.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlrvlsb9a"/>`,
		"fallback": "academicons:acmdl-square",
	});
}

export default Component;
