import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/s/szxzcsbwd.css';
import '../../css/v/vqwn2n25w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="szxzcsbwd"/><circle class="vqwn2n25w"/></g>`,
		"fallback": "humbleicons:humbleicon",
	});
}

export default Component;
