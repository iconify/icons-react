import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv5vedcrf.css';
import '../../css/h/hao8iibvm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv5vedcrf"/><path class="hao8iibvm"/>`,
		"fallback": "carbon:ibm-cloud-direct-link-2-connect",
	});
}

export default Component;
