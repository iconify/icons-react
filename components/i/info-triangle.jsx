import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sdnv_bclj.css';
import '../../css/q/qw34h8bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sdnv_bclj"/><path class="qw34h8bgw"/></g>`,
		"fallback": "tabler:info-triangle",
	});
}

export default Component;
