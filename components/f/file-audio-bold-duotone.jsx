import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_dr2jbnp.css';
import '../../css/y/ya_55rppu.css';
import '../../css/c/c5pvwgjsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w_dr2jbnp"/><path clip-rule="evenodd" class="ya_55rppu"/><path class="c5pvwgjsk"/></g>`,
		"fallback": "solar:file-audio-bold-duotone",
	});
}

export default Component;
