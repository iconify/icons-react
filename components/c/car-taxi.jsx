import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qssessobw.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qssessobw"/>`,
		"fallback": "zmdi:car-taxi",
	});
}

export default Component;
