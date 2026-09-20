import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tx1kcpc6o.css';
import '../../css/n/nn_kckb7q.css';
import '../../css/d/dsc0ybr9r.css';
import '../../css/t/tj546xb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tx1kcpc6o"/><path class="nn_kckb7q"/><path class="dsc0ybr9r"/><path class="tj546xb9n"/></g>`,
		"fallback": "streamline-ultimate-color:day-sunrise-1",
	});
}

export default Component;
