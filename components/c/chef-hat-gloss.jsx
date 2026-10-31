import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlgm7cbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlgm7cbhb"/>`,
		"fallback": "withicons:chef-hat-gloss",
	});
}

export default Component;
