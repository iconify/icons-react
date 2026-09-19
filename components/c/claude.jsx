import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt5nkhb5u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt5nkhb5u"/>`,
		"fallback": "devicon-plain:claude",
	});
}

export default Component;
