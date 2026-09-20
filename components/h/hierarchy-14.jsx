import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mna_yydkl.css';
import '../../css/a/aqfsm3bvb.css';
import '../../css/n/n384eg6-o.css';
import '../../css/o/omgun3cyf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mna_yydkl"/><path class="aqfsm3bvb"/><path class="n384eg6-o"/><path class="omgun3cyf"/></g>`,
		"fallback": "streamline-color:hierarchy-14",
	});
}

export default Component;
