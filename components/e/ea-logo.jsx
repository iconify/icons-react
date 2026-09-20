import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aztlz7bep.css';
import '../../css/b/by1inibcv.css';
import '../../css/e/equ9zrp6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aztlz7bep"/><path class="by1inibcv"/><path class="equ9zrp6g"/></g>`,
		"fallback": "streamline-ultimate-color:ea-logo",
	});
}

export default Component;
