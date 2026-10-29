import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fgaqfsbrg.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/r/rweozib1u.css';
import '../../css/x/x5kvoacvm.css';
import '../../css/x/x82fbcc8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fgaqfsbrg wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="rweozib1u wm-k"/><path class="wm-a x5kvoacvm"/><path class="wm-k x82fbcc8b"/></g>`,
		"fallback": "withicons:avatar-monster-fluffy-blueprint",
	});
}

export default Component;
