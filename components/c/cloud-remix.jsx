import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eawg9ib8u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eawg9ib8u"/>`,
		"fallback": "streamline-flex:cloud-remix",
	});
}

export default Component;
