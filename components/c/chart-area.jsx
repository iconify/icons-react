import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z22a7qbic.css';
import '../../css/d/dpjj_cbbf.css';
import '../../css/l/lhks2kb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a z22a7qbic"/><path class="dpjj_cbbf wm-k"/><path class="lhks2kb_g wm-k"/>`,
		"fallback": "withicons-bauhaus:chart-area",
	});
}

export default Component;
