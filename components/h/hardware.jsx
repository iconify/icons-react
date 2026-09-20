import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w17b5e_rt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w17b5e_rt"/>`,
		"fallback": "maki:hardware",
	});
}

export default Component;
