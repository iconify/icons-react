import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kk45u3h5t.css';
import '../../css/p/p_4trfb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kk45u3h5t"/><path class="p_4trfb9n"/></g>`,
		"fallback": "solar:history-broken",
	});
}

export default Component;
