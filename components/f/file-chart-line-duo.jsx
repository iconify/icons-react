import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va2qw5bsc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g41oqhzpy.css';
import '../../css/i/ixg3tzbda.css';
import '../../css/m/mymy2tg4z.css';
import '../../css/p/p__i9vlwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary va2qw5bsc"/><g class="dt0cm9dhy primary"><path class="g41oqhzpy"/><path class="ixg3tzbda"/><path class="mymy2tg4z"/><path class="p__i9vlwi"/></g>`,
		"fallback": "iconaut:file-chart-line-duo",
	});
}

export default Component;
