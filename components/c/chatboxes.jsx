import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqkz2q7yx.css';
import '../../css/w/wyaou_efh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqkz2q7yx"/><path class="wyaou_efh"/>`,
		"fallback": "ion:chatboxes",
	});
}

export default Component;
