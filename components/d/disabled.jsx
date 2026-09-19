import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdhhz2seu.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdhhz2seu"/>`,
		"fallback": "ps:disabled",
	});
}

export default Component;
