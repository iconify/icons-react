import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdt0zfbmh.css';
import '../../css/d/du2fdco7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jdt0zfbmh"/><path class="du2fdco7t"/></g>`,
		"fallback": "tdesign:ability-open",
	});
}

export default Component;
