import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgob4pbqk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgob4pbqk"/>`,
		"fallback": "devicon-plain:android",
	});
}

export default Component;
