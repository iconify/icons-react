import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7pevhgad.css';
import '../../css/p/pkphtfbdi.css';
import '../../css/a/a1ldf12-h.css';
import '../../css/m/ml61terwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="m7pevhgad"/><path class="pkphtfbdi"/><circle class="a1ldf12-h"/><circle class="ml61terwk"/></g>`,
		"fallback": "lets-icons:angry-light",
	});
}

export default Component;
