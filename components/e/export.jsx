import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n3_xkvbyw.css';
import '../../css/f/f8ckzv0yc.css';
import '../../css/p/puubmlblv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="n3_xkvbyw"/><path class="f8ckzv0yc"/><path class="puubmlblv"/></g>`,
		"fallback": "icon-park:export",
	});
}

export default Component;
