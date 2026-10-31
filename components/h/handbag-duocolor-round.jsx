import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/ztt6nrbso.css';
import '../../css/q/q6bglfbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ztt6nrbso"/><path class="q6bglfbxp"/></g>`,
		"fallback": "coolicons:handbag-duocolor-round",
	});
}

export default Component;
