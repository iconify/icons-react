import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r22r-9bdu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r22r-9bdu"/>`,
		"fallback": "f7:arrow-2-squarepath",
	});
}

export default Component;
