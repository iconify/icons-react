import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yshcjbced.css';
import '../../css/s/s3j__thdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yshcjbced"/><path class="s3j__thdr"/></g>`,
		"fallback": "keyline-icons:credit-card-check-fill",
	});
}

export default Component;
