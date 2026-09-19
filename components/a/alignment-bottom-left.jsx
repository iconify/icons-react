import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/l/lly47lhpg.css';
import '../../css/v/v2gh5prmn.css';
import '../../css/a/apbx-tdzo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="lly47lhpg"/><path class="v2gh5prmn"/><path class="apbx-tdzo"/></g>`,
		"fallback": "icon-park:alignment-bottom-left",
	});
}

export default Component;
