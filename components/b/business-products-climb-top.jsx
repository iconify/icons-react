import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovt9mfbde.css';
import '../../css/d/drbh0xbue.css';
import '../../css/w/wf196s0yh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovt9mfbde"/><path class="drbh0xbue"/><path class="wf196s0yh"/>`,
		"fallback": "streamline-pixel:business-products-climb-top",
	});
}

export default Component;
