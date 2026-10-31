import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a9e6llb2l.css';
import '../../css/z/z4yh73ins.css';
import '../../css/o/o09k2wvmn.css';
import '../../css/d/drwxlkbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a9e6llb2l wm-shadow"/><path class="z4yh73ins"/><path class="o09k2wvmn"/><path class="drwxlkbur"/></g>`,
		"fallback": "withicons-retro:hard-drive",
	});
}

export default Component;
