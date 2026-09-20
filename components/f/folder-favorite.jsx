import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qgxlicbay.css';
import '../../css/n/nvph-moyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qgxlicbay"/><path class="nvph-moyf"/></g>`,
		"fallback": "reicon:folder-favorite",
	});
}

export default Component;
