import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mre-spuzg.css';
import '../../css/r/rwhb52b3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mre-spuzg"/><path class="rwhb52b3s"/>`,
		"fallback": "carbon:ibm-cloud-key-protect",
	});
}

export default Component;
