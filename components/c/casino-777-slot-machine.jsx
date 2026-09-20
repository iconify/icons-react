import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vb-yt2b9s.css';
import '../../css/i/i100cjkzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vb-yt2b9s"/><path class="i100cjkzv"/></g>`,
		"fallback": "streamline-freehand:casino-777-slot-machine",
	});
}

export default Component;
