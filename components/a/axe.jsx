import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jonq8kbnh.css';
import '../../css/u/u7pa-p18h.css';
import '../../css/m/mjecvc15l.css';
import '../../css/g/gfqmenbgk.css';
import '../../css/o/ol0dwcb1g.css';
import '../../css/v/vte0veb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jonq8kbnh"/><path class="u7pa-p18h"/><path class="mjecvc15l wm-k"/><path class="gfqmenbgk wm-a"/><path class="ol0dwcb1g"/><path class="vte0veb9k"/></g>`,
		"fallback": "withicons-kawaii:axe",
	});
}

export default Component;
