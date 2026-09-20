import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zbs_fwc2n.css';
import '../../css/v/vzg_utb6x.css';
import '../../css/p/pjkl_zqkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zbs_fwc2n"/><path class="vzg_utb6x"/><path class="pjkl_zqkk"/></g>`,
		"fallback": "tabler:box-multiple-3",
	});
}

export default Component;
