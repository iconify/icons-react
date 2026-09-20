import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7tkv1bci.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n7tkv1bci"/>`,
		"fallback": "ix:customer",
	});
}

export default Component;
