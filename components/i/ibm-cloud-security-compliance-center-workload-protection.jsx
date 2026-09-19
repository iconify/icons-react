import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/almjracyr.css';
import '../../css/l/la0xxkb4z.css';
import '../../css/n/n0jc1kb2y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="almjracyr"/><path class="la0xxkb4z"/><path class="n0jc1kb2y"/>`,
		"fallback": "carbon:ibm-cloud-security-compliance-center-workload-protection",
	});
}

export default Component;
