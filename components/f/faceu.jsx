import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9usotbod.css';
import '../../css/u/uv-ggnbgb.css';
import '../../css/o/oe3u2eq0u.css';
import '../../css/a/aw231xbym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9usotbod"/><path class="uv-ggnbgb"/><ellipse class="oe3u2eq0u"/><ellipse class="aw231xbym"/></g>`,
		"fallback": "icon-park:faceu",
	});
}

export default Component;
