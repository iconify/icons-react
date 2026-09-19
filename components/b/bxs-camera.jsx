import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlcke6kyc.css';
import '../../css/r/r4v-mt3za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlcke6kyc"/><path class="r4v-mt3za"/>`,
		"fallback": "bx:bxs-camera",
	});
}

export default Component;
