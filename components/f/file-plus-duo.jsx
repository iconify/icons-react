import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va2qw5bsc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g41oqhzpy.css';
import '../../css/i/ixg3tzbda.css';
import '../../css/y/yw8q5njne.css';
import '../../css/x/xyv1gab5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary va2qw5bsc"/><g class="dt0cm9dhy primary"><path class="g41oqhzpy"/><path class="ixg3tzbda"/><path class="yw8q5njne"/><path class="xyv1gab5f"/></g>`,
		"fallback": "iconaut:file-plus-duo",
	});
}

export default Component;
