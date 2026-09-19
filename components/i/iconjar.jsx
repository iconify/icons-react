import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1wx11b6p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1wx11b6p"/>`,
		"fallback": "cib:iconjar",
	});
}

export default Component;
