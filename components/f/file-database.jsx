import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dkkt2w9hx.css';
import '../../css/r/r5tfxkf_j.css';
import '../../css/z/zqx2zeuta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dkkt2w9hx"/><path class="r5tfxkf_j"/><path class="zqx2zeuta"/></g>`,
		"fallback": "hugeicons:file-database",
	});
}

export default Component;
