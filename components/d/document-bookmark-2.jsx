import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uw3xdbbto.css';
import '../../css/g/gov1h1b6y.css';
import '../../css/x/xk5hq-b0q.css';
import '../../css/z/zo7p9o28s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uw3xdbbto"/><path class="gov1h1b6y"/><path class="xk5hq-b0q"/><path class="zo7p9o28s"/></g>`,
		"fallback": "streamline-cyber-color:document-bookmark-2",
	});
}

export default Component;
