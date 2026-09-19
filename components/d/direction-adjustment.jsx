import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b5fsfvb3t.css';
import '../../css/w/wjzt-ubkr.css';
import '../../css/n/nltaw2bqd.css';
import '../../css/o/oev2hvb9x.css';
import '../../css/b/bwdpl5zyw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="b5fsfvb3t"/><path class="wjzt-ubkr"/><path class="nltaw2bqd"/><path class="oev2hvb9x"/><circle class="bwdpl5zyw"/></g>`,
		"fallback": "icon-park:direction-adjustment",
	});
}

export default Component;
