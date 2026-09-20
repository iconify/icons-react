import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/slt4_bbhr.css';
import '../../css/x/xgsub_bkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="slt4_bbhr"/><path class="xgsub_bkj"/></g>`,
		"fallback": "tabler:hourglass-low",
	});
}

export default Component;
