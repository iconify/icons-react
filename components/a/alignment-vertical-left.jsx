import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/e/ew_-ff-vl.css';
import '../../css/g/gs13yqz0b.css';
import '../../css/l/ljv3ubx8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="ew_-ff-vl"/><path class="gs13yqz0b"/><path class="ljv3ubx8d"/></g>`,
		"fallback": "icon-park:alignment-vertical-left",
	});
}

export default Component;
