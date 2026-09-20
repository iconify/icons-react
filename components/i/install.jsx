import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vj5eyac4z.css';
import '../../css/x/xp36hhb7e.css';
import '../../css/e/ej04wndpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vj5eyac4z"/><path class="xp36hhb7e"/><path class="ej04wndpe"/></g>`,
		"fallback": "tdesign:install",
	});
}

export default Component;
