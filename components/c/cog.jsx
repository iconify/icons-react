import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_zh5yb7t.css';
import '../../css/c/cv5n90y6u.css';
import '../../css/r/rls4zkybs.css';
import '../../css/g/g_uoqib7t.css';
import '../../css/p/p3dwmx5rl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j_zh5yb7t"/><path class="cv5n90y6u"/><path class="rls4zkybs"/><path class="g_uoqib7t"/><path class="p3dwmx5rl"/></g>`,
		"fallback": "streamline-cyber-color:cog",
	});
}

export default Component;
