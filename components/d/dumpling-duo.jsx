import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wf0r_fblp.css';
import '../../css/n/n8lapqogo.css';
import '../../css/j/jstsvibwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wf0r_fblp"/><path class="n8lapqogo wm-a"/><path class="jstsvibwd"/></g>`,
		"fallback": "withicons:dumpling-duo",
	});
}

export default Component;
