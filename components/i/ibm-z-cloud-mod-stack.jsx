import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy--hfb3b.css';
import '../../css/d/dc1zo4nmc.css';
import '../../css/a/a9d8_nbrl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy--hfb3b"/><path class="dc1zo4nmc"/><path class="a9d8_nbrl"/>`,
		"fallback": "carbon:ibm-z-cloud-mod-stack",
	});
}

export default Component;
