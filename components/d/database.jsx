import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puljpks1i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puljpks1i"/>`,
		"fallback": "dashicons:database",
	});
}

export default Component;
