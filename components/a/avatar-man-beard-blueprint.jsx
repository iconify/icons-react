import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vmejjemry.css';
import '../../css/f/fgaqfsbrg.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/g/g_9-3bszy.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vmejjemry wm-deco"/><path class="fgaqfsbrg wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="g_9-3bszy"/><path class="vildi5bvg"/></g>`,
		"fallback": "withicons:avatar-man-beard-blueprint",
	});
}

export default Component;
