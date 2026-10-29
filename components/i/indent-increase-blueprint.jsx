import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fci6hf7ny.css';
import '../../css/m/mhdr543mh.css';
import '../../css/e/e18g5nbpy.css';
import '../../css/v/vgssyxiqi.css';
import '../../css/e/e166uhm4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fci6hf7ny wm-deco"/><path class="mhdr543mh wm-deco"/><path class="e18g5nbpy wm-k"/><path class="vgssyxiqi wm-a"/><path class="e166uhm4q wm-k"/></g>`,
		"fallback": "withicons:indent-increase-blueprint",
	});
}

export default Component;
