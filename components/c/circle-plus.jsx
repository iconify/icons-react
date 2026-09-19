import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbirz4byx.css';
import '../../css/c/c9buwng5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbirz4byx"/><path class="c9buwng5i"/>`,
		"fallback": "circum:circle-plus",
	});
}

export default Component;
