import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/e/e74gmob1x.css';
import '../../css/r/ragiu_dif.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><rect class="e74gmob1x"/><path class="ragiu_dif"/></g>`,
		"fallback": "icon-park:chinese",
	});
}

export default Component;
