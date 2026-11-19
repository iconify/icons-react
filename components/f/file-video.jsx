import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mocw7z0mb.css';
import '../../css/o/o_u64ccfk.css';
import '../../css/d/dhe6a7btj.css';
import '../../css/t/tuu51sbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mocw7z0mb"/><path class="o_u64ccfk"/><path class="dhe6a7btj"/><path class="tuu51sbpx"/></g>`,
		"fallback": "andrsrxn:file-video",
	});
}

export default Component;
