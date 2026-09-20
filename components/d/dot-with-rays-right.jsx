import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otiao8vie.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otiao8vie"/>`,
		"fallback": "pinhead:dot-with-rays-right",
	});
}

export default Component;
