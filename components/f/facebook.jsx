import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2yw-ccqu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2yw-ccqu"/>`,
		"fallback": "devicon-plain:facebook",
	});
}

export default Component;
