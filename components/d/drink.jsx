import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xpangfbwq.css';
import '../../css/q/qtyeivbzw.css';
import '../../css/f/fptq2jb3r.css';
import '../../css/a/azk9q0baw.css';
import '../../css/s/s9_w-ib4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="xpangfbwq"/><path class="qtyeivbzw"/><path class="fptq2jb3r"/><path class="azk9q0baw"/><path class="s9_w-ib4f"/></g>`,
		"fallback": "matita:drink",
	});
}

export default Component;
