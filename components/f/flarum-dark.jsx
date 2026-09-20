import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqnt8yb-o.css';
import '../../css/x/xvo7kubqk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqnt8yb-o"/><path class="xvo7kubqk"/>`,
		"fallback": "selfhst:flarum-dark",
	});
}

export default Component;
