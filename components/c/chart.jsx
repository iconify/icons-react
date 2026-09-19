import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw8ytabjy.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw8ytabjy"/>`,
		"fallback": "zmdi:chart",
	});
}

export default Component;
