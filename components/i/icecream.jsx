import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/i/i4qf59b1a.css';
import '../../css/f/fanud-8su.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="i4qf59b1a"/><path class="fanud-8su"/></g>`,
		"fallback": "icon-park:icecream",
	});
}

export default Component;
