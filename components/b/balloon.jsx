import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kth1skbvq.css';
import '../../css/r/rupc0hv-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kth1skbvq"/><path class="rupc0hv-a"/></g>`,
		"fallback": "lucide:balloon",
	});
}

export default Component;
