import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjme4nbjn.css';
import '../../css/i/im9u8mrja.css';
import '../../css/m/miwtwu-as.css';
import '../../css/e/ef_o6yb9x.css';
import '../../css/h/h5_bokbed.css';
import '../../css/a/ach27abhz.css';
import '../../css/c/c58ma9byn.css';
import '../../css/w/w5skle6jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="wjme4nbjn"/><rect class="im9u8mrja"/><circle class="miwtwu-as"/><circle class="ef_o6yb9x"/><circle class="h5_bokbed"/><circle class="ach27abhz"/><circle class="c58ma9byn"/><circle class="w5skle6jc"/></g>`,
		"fallback": "proicons:calculator",
	});
}

export default Component;
