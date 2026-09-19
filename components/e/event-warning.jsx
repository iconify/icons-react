import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gur1qyx5l.css';
import '../../css/q/qag32gbsa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gur1qyx5l"/><path class="qag32gbsa"/>`,
		"fallback": "carbon:event-warning",
	});
}

export default Component;
