import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uanrmkuqh.css';
import '../../css/v/vsn606bdm.css';
import '../../css/w/wa7i5m64f.css';
import '../../css/z/zhuvgobpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uanrmkuqh"/><path class="vsn606bdm"/><path class="wa7i5m64f"/><path class="zhuvgobpv"/></g>`,
		"fallback": "streamline-ultimate-color:button-zigzag-1",
	});
}

export default Component;
