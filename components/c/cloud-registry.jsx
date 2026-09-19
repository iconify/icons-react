import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-y7l7lfv.css';
import '../../css/x/xtad_yvwf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-y7l7lfv"/><path class="xtad_yvwf"/>`,
		"fallback": "carbon:cloud-registry",
	});
}

export default Component;
