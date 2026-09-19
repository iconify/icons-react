import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jhwyttbbw.css';
import '../../css/y/y6qsdubar.css';
import '../../css/u/url72jp-e.css';
import '../../css/s/sgatz43yh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="jhwyttbbw"/><circle class="y6qsdubar"/><circle class="url72jp-e"/><circle class="sgatz43yh"/></g>`,
		"fallback": "bitcoin-icons:entropy-outline",
	});
}

export default Component;
