import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhwk81qdq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhwk81qdq"/>`,
		"fallback": "radix-icons:border-solid",
	});
}

export default Component;
