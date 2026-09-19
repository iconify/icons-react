import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gdx57i08q.css';
import '../../css/g/gha7d3b_u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="gdx57i08q"/><path class="gha7d3b_u"/></g>`,
		"fallback": "icon-park-outline:align-left",
	});
}

export default Component;
