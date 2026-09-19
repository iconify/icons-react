import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yetkoc4zx.css';
import '../../css/t/twzr5ub1p.css';
import '../../css/z/zcajn8bhw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yetkoc4zx"/><path class="twzr5ub1p"/><path class="zcajn8bhw"/></g>`,
		"fallback": "icon-park-outline:chart-histogram-two",
	});
}

export default Component;
