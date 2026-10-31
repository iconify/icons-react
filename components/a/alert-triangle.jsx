import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfn4-fbpg.css';
import '../../css/b/b5qymdbqk.css';
import '../../css/y/y6f63p5dy.css';
import '../../css/s/s9zmfboay.css';
import '../../css/z/zprdkcbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sfn4-fbpg wm-k"/><path class="b5qymdbqk wm-deco"/><path class="wm-k y6f63p5dy"/><path class="s9zmfboay wm-k"/><path class="wm-shadow zprdkcbqu"/></g>`,
		"fallback": "withicons-valentine:alert-triangle",
	});
}

export default Component;
