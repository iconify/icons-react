import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxo54sbue.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxo54sbue"/>`,
		"fallback": "carbon:ibm-z-open-editor",
	});
}

export default Component;
