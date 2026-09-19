import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydhos9v1w.css';
import '../../css/p/p7zf9gbeq.css';
import '../../css/p/pmv6vn68x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydhos9v1w"/><path class="p7zf9gbeq"/><path class="pmv6vn68x"/>`,
		"fallback": "carbon:ibm-cloud-vpc-endpoints",
	});
}

export default Component;
