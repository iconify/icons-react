import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rco1j_jwf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rco1j_jwf"/>`,
		"fallback": "pinhead:coughing-face-with-spittle",
	});
}

export default Component;
