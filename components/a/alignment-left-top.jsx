import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/u/uzhc-bb2f.css';
import '../../css/l/lxrrntk3f.css';
import '../../css/v/v5wk-abnk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="uzhc-bb2f"/><path class="lxrrntk3f"/><path class="v5wk-abnk"/></g>`,
		"fallback": "icon-park:alignment-left-top",
	});
}

export default Component;
