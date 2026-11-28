import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewjozk71g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lw0cjcbam.css';
import '../../css/b/b8cpvtb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewjozk71g secondary"/><g class="dt0cm9dhy primary"><path class="lw0cjcbam"/><path class="b8cpvtb0b"/></g>`,
		"fallback": "iconaut:diamonds-duo",
	});
}

export default Component;
