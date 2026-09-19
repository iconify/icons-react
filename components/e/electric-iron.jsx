import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/x/xohz1320f.css';
import '../../css/x/xeq3ybc8v.css';
import '../../css/f/fg4j2vbsq.css';
import '../../css/a/ajxal6bqq.css';
import '../../css/g/g7ms539aj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="xohz1320f"/><path class="xeq3ybc8v"/><circle class="fg4j2vbsq"/><path class="ajxal6bqq"/><path class="g7ms539aj"/></g>`,
		"fallback": "icon-park:electric-iron",
	});
}

export default Component;
