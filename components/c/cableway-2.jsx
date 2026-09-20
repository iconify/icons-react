import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/h87zxj8uq.css';
import '../../css/b/b250h9bbp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="h87zxj8uq"/><path class="b250h9bbp"/></g>`,
		"fallback": "marketeq:cableway-2",
	});
}

export default Component;
