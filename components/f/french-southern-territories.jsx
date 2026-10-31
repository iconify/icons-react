import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztnllf43t.css';
import '../../css/z/zc-w15bqg.css';
import '../../css/l/lqrf3bcko.css';
import '../../css/y/yrhgbiwpi.css';
import '../../css/g/gwwb2lbsq.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztnllf43t"/><path class="zc-w15bqg"/><path class="lqrf3bcko"/><path class="yrhgbiwpi"/><path class="gwwb2lbsq"/>`,
		"fallback": "tabler-flags:french-southern-territories",
	});
}

export default Component;
