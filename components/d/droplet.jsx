import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kmnozrant.css';
import '../../css/d/dn35_ob5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kmnozrant"/><path class="dn35_ob5o"/></g>`,
		"fallback": "matita:droplet",
	});
}

export default Component;
