import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/snqhqacax.css';
import '../../css/v/vh06-4bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="snqhqacax"/><path class="vh06-4bmf"/></g>`,
		"fallback": "tabler:chart-cohort",
	});
}

export default Component;
