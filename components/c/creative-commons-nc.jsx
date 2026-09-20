import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm9-6ac6j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm9-6ac6j"/>`,
		"fallback": "la:creative-commons-nc",
	});
}

export default Component;
