import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/j/jki9dnbuh.css';
import '../../css/w/wmmklobkm.css';
import '../../css/s/s8qju0q_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path class="jki9dnbuh"/><path class="wmmklobkm"/><path class="s8qju0q_z"/></g>`,
		"fallback": "solar:file-question-mark-bold-duotone",
	});
}

export default Component;
