import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxn7e_r0q.css';
import '../../css/v/vhcx94exb.css';
import '../../css/t/tcsio-2nj.css';
import '../../css/r/rxdqxpb3g.css';
import '../../css/i/ize715bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gxn7e_r0q"/><path class="vhcx94exb"/><path class="tcsio-2nj"/><ellipse class="rxdqxpb3g"/><path class="ize715bzt"/></g>`,
		"fallback": "andrsrxn:file-database",
	});
}

export default Component;
