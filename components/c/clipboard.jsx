import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj5emybiw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj5emybiw"/>`,
		"fallback": "la:clipboard",
	});
}

export default Component;
