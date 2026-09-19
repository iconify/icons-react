import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs_bqebbh.css';
import '../../css/m/m3lxbjutz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs_bqebbh"/><path class="m3lxbjutz"/>`,
		"fallback": "carbon:ibm-z-cloud-provisioning",
	});
}

export default Component;
