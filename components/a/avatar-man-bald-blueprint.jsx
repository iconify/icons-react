import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/ztdgtpbzf.css';
import '../../css/f/fgaqfsbrg.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/r/rllk8yiqr.css';
import '../../css/d/d1nfh98la.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco ztdgtpbzf"/><path class="fgaqfsbrg wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="rllk8yiqr wm-k"/><path class="d1nfh98la wm-a"/><path class="vildi5bvg wm-a"/></g>`,
		"fallback": "withicons:avatar-man-bald-blueprint",
	});
}

export default Component;
