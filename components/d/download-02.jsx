import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nq2eaccpx.css';
import '../../css/t/tgd7oxbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nq2eaccpx"/><path class="tgd7oxbsz"/></g>`,
		"fallback": "hugeicons:download-02",
	});
}

export default Component;
