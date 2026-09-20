import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6jc6qbnc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6jc6qbnc"/>`,
		"fallback": "la:bootstrap",
	});
}

export default Component;
