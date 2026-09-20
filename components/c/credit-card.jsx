import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q53hz-bxg.css';
import '../../css/z/z8ovlk4ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q53hz-bxg"/><path class="z8ovlk4ie"/>`,
		"fallback": "pixel:credit-card",
	});
}

export default Component;
