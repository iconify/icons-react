import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/v/vccu39vmu.css';
import '../../css/p/p216qf55d.css';
import '../../css/r/rxw2lyrtd.css';
import '../../css/x/xd05dybgk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="vccu39vmu"/><circle class="p216qf55d"/><path class="rxw2lyrtd"/><path class="xd05dybgk"/></g>`,
		"fallback": "icon-park:email-search",
	});
}

export default Component;
