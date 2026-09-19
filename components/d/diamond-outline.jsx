import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqukwx59n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqukwx59n"/>`,
		"fallback": "carbon:diamond-outline",
	});
}

export default Component;
