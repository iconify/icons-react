import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fnh7pssfp.css';
import '../../css/w/wz_4lh3kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fnh7pssfp"/><path class="wz_4lh3kd"/></g>`,
		"fallback": "struq:cloud",
	});
}

export default Component;
