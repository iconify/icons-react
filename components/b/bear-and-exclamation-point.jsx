import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o36b4-bki.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o36b4-bki"/>`,
		"fallback": "pinhead:bear-and-exclamation-point",
	});
}

export default Component;
