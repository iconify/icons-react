import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq0gms1eh.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 mq0gms1eh"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bitcoin-line",
	});
}

export default Component;
