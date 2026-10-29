import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/ptlgm_dfx.css';
import '../../css/i/i9qc_ccyw.css';
import '../../css/w/wevb6ybjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ptlgm_dfx"/><path class="i9qc_ccyw"/><path class="wevb6ybjj"/></g>`,
		"fallback": "withicons-bauhaus:building-2",
	});
}

export default Component;
