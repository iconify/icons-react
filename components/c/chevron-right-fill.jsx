import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnxe0jbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nnxe0jbpv"/>`,
		"fallback": "si:chevron-right-fill",
	});
}

export default Component;
