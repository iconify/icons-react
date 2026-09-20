import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8vaz6bvv.css';
import '../../css/p/pn6ejhb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8vaz6bvv"/><path class="pn6ejhb8x"/>`,
		"fallback": "tdesign:discount-filled",
	});
}

export default Component;
