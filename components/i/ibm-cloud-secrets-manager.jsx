import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv6t6jgex.css';
import '../../css/j/j8hf9v3cp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv6t6jgex"/><path class="j8hf9v3cp"/>`,
		"fallback": "carbon:ibm-cloud-secrets-manager",
	});
}

export default Component;
