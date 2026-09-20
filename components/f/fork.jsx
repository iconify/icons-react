import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ym_5btzkq.css';
import '../../css/a/aluhjmtba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ym_5btzkq"/><path class="aluhjmtba"/></g>`,
		"fallback": "tdesign:fork",
	});
}

export default Component;
