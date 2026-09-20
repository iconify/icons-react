import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy3g12d2m.css';
import '../../css/v/vy88tye-k.css';
import '../../css/d/df96-zbse.css';
import '../../css/l/lp780vjvx.css';
import '../../css/j/jhyqgidwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy3g12d2m"/><path class="vy88tye-k"/><path class="df96-zbse"/><path class="lp780vjvx"/><path class="jhyqgidwz"/>`,
		"fallback": "token:brick",
	});
}

export default Component;
