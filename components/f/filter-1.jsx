import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7kyfbcir.css';
import '../../css/x/xj_mdqbri.css';
import '../../css/a/aosh_6bqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k7kyfbcir"/><path class="xj_mdqbri"/><path class="aosh_6bqq"/></g>`,
		"fallback": "tdesign:filter-1",
	});
}

export default Component;
