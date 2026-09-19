import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko6qyh8kc.css';
import '../../css/l/lxpp23b9t.css';
import '../../css/j/jpnbaccbm.css';
import '../../css/g/gmyqum2ed.css';
import '../../css/s/sf9hz8haq.css';
import '../../css/x/xowgn_eci.css';
import '../../css/q/q7mfscc1v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko6qyh8kc"/><path class="lxpp23b9t"/><path class="jpnbaccbm"/><path class="gmyqum2ed"/><path class="sf9hz8haq"/><path class="xowgn_eci"/><path class="q7mfscc1v"/>`,
		"fallback": "fxemoji:deliverytruck",
	});
}

export default Component;
