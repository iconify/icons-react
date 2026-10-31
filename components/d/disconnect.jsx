import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xnkx5ky_t.css';
import '../../css/q/qxlzy-bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xnkx5ky_t"/><path class="qxlzy-bsz"/></g>`,
		"fallback": "struq:disconnect",
	});
}

export default Component;
