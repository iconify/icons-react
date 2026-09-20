import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m4mu9pi1w.css';
import '../../css/l/lpuw_j63z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m4mu9pi1w"/><path class="lpuw_j63z"/></g>`,
		"fallback": "tabler:brand-kakao-talk",
	});
}

export default Component;
