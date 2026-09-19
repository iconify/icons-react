import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvccdfbpr.css';
import '../../css/s/s229knb7k.css';
import '../../css/e/e1jcxhbna.css';
import '../../css/i/i-sniivkv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvccdfbpr"/><circle class="s229knb7k"/><circle class="e1jcxhbna"/><circle class="i-sniivkv"/>`,
		"fallback": "carbon:ibm-engineering-workflow-mgmt",
	});
}

export default Component;
