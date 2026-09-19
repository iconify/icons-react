import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuqht7spy.css';
import '../../css/u/ufjnasr5o.css';
import '../../css/w/wzgk5vbjr.css';
import '../../css/a/agys1im8u.css';
import '../../css/i/ium_54bmq.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged cuqht7spy"/><ellipse class="clr-i-outline--badged clr-i-outline-path-2--badged ufjnasr5o"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged wzgk5vbjr"/><path class="agys1im8u clr-i-outline--badged clr-i-outline-path-4--badged"/><path class="clr-i-outline--badged clr-i-outline-path-5--badged ium_54bmq"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-6--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:cluster-outline-badged",
	});
}

export default Component;
