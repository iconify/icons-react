import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0vmx-8pt.css';

const viewBox = {"width":28,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0vmx-8pt"/>`,
		"fallback": "et:hotairballoon",
	});
}

export default Component;
