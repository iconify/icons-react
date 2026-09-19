import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz3-xgbbc.css';
import '../../css/l/lw8ky0vfq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz3-xgbbc"/><path class="lw8ky0vfq"/>`,
		"fallback": "fxemoji:banknotedollar",
	});
}

export default Component;
