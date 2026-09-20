import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ibb5xccmv.css';
import '../../css/c/cq-1llb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ibb5xccmv"/><path class="cq-1llb1i"/></g>`,
		"fallback": "tabler:device-cctv-off",
	});
}

export default Component;
