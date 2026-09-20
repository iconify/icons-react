import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lm5k-lblf.css';
import '../../css/z/z2fjp4bxj.css';
import '../../css/w/wrp93a_gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lm5k-lblf"/><path class="z2fjp4bxj"/><path class="wrp93a_gz"/></g>`,
		"fallback": "streamline-ultimate-color:graph-stats-descend",
	});
}

export default Component;
