import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l8jiedbhu.css';
import '../../css/t/t-t_6zbvr.css';
import '../../css/l/l5-6ydbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l8jiedbhu"/><path class="t-t_6zbvr"/><path class="l5-6ydbxg"/></g>`,
		"fallback": "keyline-icons:credit-card-sparkles-two-tone",
	});
}

export default Component;
