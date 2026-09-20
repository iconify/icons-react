import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ezhtb1bvd.css';
import '../../css/z/zo29ocbol.css';
import '../../css/k/k1axlismq.css';
import '../../css/d/dzukk-jhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ezhtb1bvd"/><path class="zo29ocbol"/><path class="k1axlismq"/><path class="dzukk-jhe"/></g>`,
		"fallback": "streamline-freehand:equalizer-stereo-play",
	});
}

export default Component;
