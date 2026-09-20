import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p05jewdzj.css';
import '../../css/g/gjma2yb7x.css';
import '../../css/k/kg067x6tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p05jewdzj"/><path class="gjma2yb7x"/><path class="kg067x6tj"/></g>`,
		"fallback": "streamline-ultimate-color:allowances-no-talking",
	});
}

export default Component;
