import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dj_hatb7f.css';
import '../../css/h/h5ssmby7z.css';
import '../../css/t/t-bwteblx.css';
import '../../css/z/z0r-q2b8a.css';
import '../../css/j/j1z-agb8y.css';
import '../../css/x/xjk6ixb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dj_hatb7f wm-k"/><path class="h5ssmby7z wm-k"/><path class="t-bwteblx wm-k"/><path class="wm-k z0r-q2b8a"/><path class="j1z-agb8y wm-shine"/><path class="wm-k xjk6ixb-n"/></g>`,
		"fallback": "withicons-anime:avatar-dino",
	});
}

export default Component;
