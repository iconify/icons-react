import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eiz3nrbcm.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/n/n9yopmb_r.css';
import '../../css/q/q0126ibtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eiz3nrbcm"/><path class="u5h8llb9a"/><path class="n9yopmb_r"/><path class="q0126ibtf"/></g>`,
		"fallback": "andrsrxn:globe-heart",
	});
}

export default Component;
