import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq-0w-box.css';
import '../../css/w/wxyzcrbfr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq-0w-box"/><path class="wxyzcrbfr"/>`,
		"fallback": "carbon:ibm-cloud-sysdig-secure",
	});
}

export default Component;
