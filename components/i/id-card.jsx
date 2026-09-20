import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqbbxr58n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqbbxr58n"/>`,
		"fallback": "la:id-card",
	});
}

export default Component;
