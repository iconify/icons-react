import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/o/op0p246rb.css';
import '../../css/f/f3j_kib7w.css';
import '../../css/c/cigu36b9l.css';
import '../../css/s/s6ysxzb1g.css';
import '../../css/s/s8qju0q_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path class="op0p246rb"/><path class="f3j_kib7w"/><path class="cigu36b9l"/><path class="s6ysxzb1g"/><path class="s8qju0q_z"/></g>`,
		"fallback": "solar:file-spreadsheet-bold-duotone",
	});
}

export default Component;
