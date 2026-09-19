import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igwhek31a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igwhek31a"/>`,
		"fallback": "carbon:ibm-federated-api-management",
	});
}

export default Component;
