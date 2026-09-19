import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr4xlubum.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr4xlubum"/>`,
		"fallback": "devicon-plain:hoppscotch",
	});
}

export default Component;
