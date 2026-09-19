import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_m1urv6e.css';
import '../../css/t/t4i08l8qa.css';
import '../../css/z/zb-bw0bat.css';
import '../../css/k/kgvzshqph.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged k_m1urv6e"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged t4i08l8qa"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged zb-bw0bat"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged kgvzshqph"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-5--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:chat-bubble-outline-badged",
	});
}

export default Component;
