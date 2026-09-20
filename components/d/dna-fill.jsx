import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbw2nob3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbw2nob3i"/>`,
		"fallback": "ri:dna-fill",
	});
}

export default Component;
