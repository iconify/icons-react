import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wceggdbtg.css';
import '../../css/i/ingyikb1h.css';
import '../../css/u/u0csdv95s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wceggdbtg"/><path class="ingyikb1h"/><path class="u0csdv95s"/>`,
		"fallback": "streamline-freehand:app-window-graph",
	});
}

export default Component;
