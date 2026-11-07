import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6rl69b5y.css';
import '../../css/x/xaot8zbng.css';
import '../../css/u/uy28rnb-n.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6rl69b5y"/><path class="xaot8zbng"/><path class="uy28rnb-n"/><path clip-rule="evenodd" class="d25mwn3tm"/>`,
		"fallback": "solar:file-chart-outline",
	});
}

export default Component;
