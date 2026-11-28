import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnlc4esmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnlc4esmg"/>`,
		"fallback": "noviair-light:container-clock",
	});
}

export default Component;
