import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uz6ay7bdz.css';
import '../../css/j/joa76xzqs.css';
import '../../css/w/wbt7cibwj.css';
import '../../css/n/ngkxae-3f.css';
import '../../css/x/xg8jp6das.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="uz6ay7bdz"/><path class="joa76xzqs"/><path class="wbt7cibwj"/><path class="ngkxae-3f"/><path class="xg8jp6das"/></g>`,
		"fallback": "icon-park:indent-left",
	});
}

export default Component;
