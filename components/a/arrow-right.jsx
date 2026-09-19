import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r--u3_bao.css';
import '../../css/f/fqdc5x1vs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r--u3_bao"/><path class="fqdc5x1vs"/></g>`,
		"fallback": "icon-park:arrow-right",
	});
}

export default Component;
