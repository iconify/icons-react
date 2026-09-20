import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlxex4bvv.css';
import '../../css/g/g5dphvbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zlxex4bvv"/><path class="g5dphvbvg"/></g>`,
		"fallback": "keyline-icons:flask-round-two-tone",
	});
}

export default Component;
