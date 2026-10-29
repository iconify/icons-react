import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uifqygoao.css';
import '../../css/b/bm5_bnnro.css';
import '../../css/o/o38mptbie.css';
import '../../css/y/yfr2y5n3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uifqygoao"/><path class="bm5_bnnro wm-a"/><path class="o38mptbie wm-a"/><path class="yfr2y5n3b"/></g>`,
		"fallback": "withicons:cast-duo",
	});
}

export default Component;
