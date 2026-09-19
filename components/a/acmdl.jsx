import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot1lbzb9b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot1lbzb9b"/>`,
		"fallback": "academicons:acmdl",
	});
}

export default Component;
