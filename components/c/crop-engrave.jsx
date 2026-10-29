import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jxzikob-p.css';
import '../../css/n/nup2x6b3k.css';
import '../../css/k/k8e5r6sft.css';
import '../../css/b/b5bfvoblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jxzikob-p"/><path class="nup2x6b3k wm-shadow"/><path class="k8e5r6sft"/><path class="b5bfvoblb"/></g>`,
		"fallback": "withicons:crop-engrave",
	});
}

export default Component;
