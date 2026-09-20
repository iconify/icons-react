import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4j5u57hg.css';
import '../../css/s/se1vh86qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l4j5u57hg"/><path class="se1vh86qj"/></g>`,
		"fallback": "tdesign:git-merge",
	});
}

export default Component;
