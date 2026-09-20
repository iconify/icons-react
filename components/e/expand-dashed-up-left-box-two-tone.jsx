import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zoniwibdn.css';
import '../../css/d/d10vn_dws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zoniwibdn"/><path class="d10vn_dws"/></g>`,
		"fallback": "keyline-icons:expand-dashed-up-left-box-two-tone",
	});
}

export default Component;
