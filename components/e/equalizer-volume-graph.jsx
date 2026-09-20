import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s_05xia1c.css';
import '../../css/e/ehpxfityl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s_05xia1c"/><path class="ehpxfityl"/></g>`,
		"fallback": "streamline-freehand:equalizer-volume-graph",
	});
}

export default Component;
