import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/e/e80_rbc2p.css';
import '../../css/r/rz0g--bqu.css';
import '../../css/h/hdkq8bcit.css';
import '../../css/a/asgrbsb4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="e80_rbc2p"/><path class="rz0g--bqu"/><path class="hdkq8bcit"/><path class="asgrbsb4f"/></g>`,
		"fallback": "icon-park-solid:diving-suit",
	});
}

export default Component;
