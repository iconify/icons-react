import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/b/bwa292bqf.css';
import '../../css/d/dclgn8fcj.css';
import '../../css/d/dfln0t_dt.css';
import '../../css/i/it10wd3to.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><path class="bwa292bqf"/><path class="dclgn8fcj"/><path class="dfln0t_dt"/><path class="it10wd3to"/></g>`,
		"fallback": "gala:brochure",
	});
}

export default Component;
