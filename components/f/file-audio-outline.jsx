import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i6i_-fbna.css';
import '../../css/e/e9we9ztjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i6i_-fbna"/><path class="e9we9ztjp"/></g>`,
		"fallback": "solar:file-audio-outline",
	});
}

export default Component;
