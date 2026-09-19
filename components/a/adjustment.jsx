import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wuhlr6b7t.css';
import '../../css/i/il4ia8h5q.css';
import '../../css/w/w75yfdbqh.css';
import '../../css/l/lz1-lobry.css';
import '../../css/d/ddphdnb6e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="wuhlr6b7t"/><path class="il4ia8h5q"/><path class="w75yfdbqh"/><path class="lz1-lobry"/><path class="ddphdnb6e"/></g>`,
		"fallback": "icon-park:adjustment",
	});
}

export default Component;
