import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kpv21hb3o.css';
import '../../css/h/h3d6wbbau.css';
import '../../css/j/jqgrt3b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kpv21hb3o"/><path class="h3d6wbbau"/><path class="jqgrt3b3f"/></g>`,
		"fallback": "tdesign:ai-git-branch",
	});
}

export default Component;
