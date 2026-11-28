import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va2qw5bsc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g41oqhzpy.css';
import '../../css/i/ixg3tzbda.css';
import '../../css/i/ih9qwpl8c.css';
import '../../css/w/w1r1-zb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary va2qw5bsc"/><g class="dt0cm9dhy primary"><path class="g41oqhzpy"/><path class="ixg3tzbda"/><path class="ih9qwpl8c"/><path class="w1r1-zb4h"/></g>`,
		"fallback": "iconaut:file-json-duo",
	});
}

export default Component;
