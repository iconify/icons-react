import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/m-8_4yb_q.css';
import '../../css/n/ndazxm14i.css';
import '../../css/g/gpeii6bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="m-8_4yb_q"/><path class="ndazxm14i"/><path class="gpeii6bpz"/></g>`,
		"fallback": "matita:file-archive",
	});
}

export default Component;
