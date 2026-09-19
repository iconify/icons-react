import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt8p0k40b.css';
import '../../css/u/u4b1utgwb.css';
import '../../css/h/hf9tixklt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt8p0k40b"/><path class="u4b1utgwb"/><path class="hf9tixklt"/>`,
		"fallback": "carbon:ibm-cloud-direct-link-2-dedicated-hosting",
	});
}

export default Component;
