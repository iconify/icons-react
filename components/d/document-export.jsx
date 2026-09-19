import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qili0cbnj.css';
import '../../css/i/iq65ps9zm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qili0cbnj"/><path class="iq65ps9zm"/>`,
		"fallback": "carbon:document-export",
	});
}

export default Component;
