import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrut-bc0z.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/n/n9yopmb_r.css';
import '../../css/e/et8p2o1mf.css';
import '../../css/l/lwc3k_kke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wrut-bc0z"/><path class="u5h8llb9a"/><path class="n9yopmb_r"/><circle class="et8p2o1mf"/><path class="lwc3k_kke"/></g>`,
		"fallback": "andrsrxn:globe-clock",
	});
}

export default Component;
