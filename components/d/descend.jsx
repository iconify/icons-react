import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vhiglp9pn.css';
import '../../css/r/ru3m3v8ji.css';
import '../../css/w/wp8kz4bue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vhiglp9pn"/><path class="ru3m3v8ji"/><path class="wp8kz4bue"/></g>`,
		"fallback": "icon-park:descend",
	});
}

export default Component;
