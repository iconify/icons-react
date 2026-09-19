import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/flaqobcrk.css';
import '../../css/i/itdqx4vmq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="flaqobcrk"/><path class="itdqx4vmq"/></g>`,
		"fallback": "icon-park-outline:building-three",
	});
}

export default Component;
