import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5e-c1wyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5e-c1wyy"/>`,
		"fallback": "coolicons:dna-fill-round",
	});
}

export default Component;
