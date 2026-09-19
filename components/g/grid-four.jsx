import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ecj5zxb4g.css';
import '../../css/t/tjp9mn54t.css';
import '../../css/z/z-4z5xbxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="ecj5zxb4g"/><path class="tjp9mn54t"/><path class="z-4z5xbxi"/></g>`,
		"fallback": "icon-park:grid-four",
	});
}

export default Component;
