import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlwnb5eal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlwnb5eal"/>`,
		"fallback": "hugeicons:arrow-down01",
	});
}

export default Component;
