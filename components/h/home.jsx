import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1tgt3btx.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1tgt3btx"/>`,
		"fallback": "zmdi:home",
	});
}

export default Component;
