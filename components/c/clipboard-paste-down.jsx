import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s5yva2b0n.css';
import '../../css/a/a2azp6b3y.css';
import '../../css/w/w52wv_7uo.css';
import '../../css/s/sxr7q-bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="s5yva2b0n"/><path class="a2azp6b3y"/><path class="w52wv_7uo"/><path class="sxr7q-bxl"/></g>`,
		"fallback": "matita:clipboard-paste-down",
	});
}

export default Component;
