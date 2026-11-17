import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h8_j8s5yy.css';
import '../../css/y/y9k2wv5xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h8_j8s5yy"/><rect class="y9k2wv5xs"/></g>`,
		"fallback": "lucide:cinema",
	});
}

export default Component;
