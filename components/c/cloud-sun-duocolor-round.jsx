import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-no4woxf.css';
import '../../css/b/bktblbcwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s-no4woxf"/><path class="bktblbcwj"/></g>`,
		"fallback": "coolicons:cloud-sun-duocolor-round",
	});
}

export default Component;
