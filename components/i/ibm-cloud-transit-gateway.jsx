import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm3ejky-b.css';
import '../../css/p/pe7z2bb3j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm3ejky-b"/><path class="pe7z2bb3j"/>`,
		"fallback": "carbon:ibm-cloud-transit-gateway",
	});
}

export default Component;
