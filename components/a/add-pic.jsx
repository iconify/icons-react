import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol1qgland.css';
import '../../css/k/k0rioybmz.css';
import '../../css/n/n9qqvlh5r.css';
import '../../css/w/wah34acde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ol1qgland"><path class="k0rioybmz"/><path class="n9qqvlh5r"/><path class="wah34acde"/></g>`,
		"fallback": "icon-park-solid:add-pic",
	});
}

export default Component;
