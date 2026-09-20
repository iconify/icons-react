import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn54w67rb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pn54w67rb"/>`,
		"fallback": "ix:cloud-upload",
	});
}

export default Component;
