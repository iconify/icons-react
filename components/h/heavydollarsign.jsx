import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2exj-boa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2exj-boa"/>`,
		"fallback": "fxemoji:heavydollarsign",
	});
}

export default Component;
