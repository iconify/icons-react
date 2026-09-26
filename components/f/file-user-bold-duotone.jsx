import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/j/jiwx95btr.css';
import '../../css/n/n-_f-9boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path clip-rule="evenodd" class="jiwx95btr"/><path class="n-_f-9boy"/></g>`,
		"fallback": "solar:file-user-bold-duotone",
	});
}

export default Component;
