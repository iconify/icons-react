import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hynd_kb9n.css';
import '../../css/n/ni0f_pbls.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hynd_kb9n"/><path class="ni0f_pbls"/>`,
		"fallback": "cil:barcode",
	});
}

export default Component;
