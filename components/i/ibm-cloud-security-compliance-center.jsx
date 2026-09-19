import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5_6rlexd.css';
import '../../css/x/xgumicc2g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5_6rlexd"/><path class="xgumicc2g"/>`,
		"fallback": "carbon:ibm-cloud-security-compliance-center",
	});
}

export default Component;
