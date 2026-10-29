import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/egx1okpdi.css';
import '../../css/c/chfexdi1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="egx1okpdi"/><path class="chfexdi1f wm-a"/></g>`,
		"fallback": "withicons:chevron-first-duo",
	});
}

export default Component;
