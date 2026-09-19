import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2iip6b1j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2iip6b1j"/>`,
		"fallback": "carbon:group-resource",
	});
}

export default Component;
