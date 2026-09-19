import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koq8s9beh.css';
import '../../css/k/kpiwvfbeo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koq8s9beh"/><path class="kpiwvfbeo"/>`,
		"fallback": "carbon:ibm-cloud-app-id",
	});
}

export default Component;
