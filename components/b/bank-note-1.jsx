import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-wdw9y_q.css';
import '../../css/a/adlrp5blf.css';
import '../../css/n/nw_2sy6tn.css';
import '../../css/o/oq2q9gbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-wdw9y_q"/><path class="adlrp5blf"/><path class="nw_2sy6tn"/><path class="oq2q9gbdb"/></g>`,
		"fallback": "streamline-cyber-color:bank-note-1",
	});
}

export default Component;
