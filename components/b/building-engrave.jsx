import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t0dw4ybam.css';
import '../../css/s/sad7sib5y.css';
import '../../css/f/fgkc19bpy.css';
import '../../css/e/euhc06b6i.css';
import '../../css/r/r309anzoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t0dw4ybam wm-k"/><path class="sad7sib5y wm-a"/><path class="fgkc19bpy wm-shadow"/><path class="euhc06b6i wm-k"/><path class="r309anzoi wm-a"/></g>`,
		"fallback": "withicons:building-engrave",
	});
}

export default Component;
