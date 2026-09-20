import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tku_61b7b.css';
import '../../css/g/gmhq_ybdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tku_61b7b"/><path class="gmhq_ybdn"/></g>`,
		"fallback": "tabler:dumbbell",
	});
}

export default Component;
