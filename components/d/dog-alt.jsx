import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-i1pqbhz.css';
import '../../css/e/ecv-qkvdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-i1pqbhz"/><path class="ecv-qkvdh"/>`,
		"fallback": "boxicons:dog-alt",
	});
}

export default Component;
