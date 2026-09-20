import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc-lvac0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oc-lvac0j"/>`,
		"fallback": "si:clock-alt-fill",
	});
}

export default Component;
