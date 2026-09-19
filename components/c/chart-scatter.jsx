import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jx31kjbmp.css';
import '../../css/m/mk0nzen8y.css';
import '../../css/w/wdgn9ub7e.css';
import '../../css/e/ebqdqabvj.css';
import '../../css/y/ya2u79bsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jx31kjbmp"/><path clip-rule="evenodd" class="mk0nzen8y"/><path clip-rule="evenodd" class="wdgn9ub7e"/><path clip-rule="evenodd" class="ebqdqabvj"/><path clip-rule="evenodd" class="ya2u79bsb"/></g>`,
		"fallback": "icon-park:chart-scatter",
	});
}

export default Component;
