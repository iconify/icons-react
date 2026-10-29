import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n938ey-gi.css';
import '../../css/e/eyu9ds-ns.css';
import '../../css/b/bh8nyubky.css';
import '../../css/z/zicgf0luh.css';
import '../../css/v/vt-2nu9uw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n938ey-gi wm-deco"/><path class="eyu9ds-ns wm-deco"/><path class="bh8nyubky wm-k"/><path class="wm-a zicgf0luh"/><path class="vt-2nu9uw wm-s"/></g>`,
		"fallback": "withicons:firecracker-string-blueprint",
	});
}

export default Component;
