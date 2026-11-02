import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbn6y9b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbn6y9b6c"/>`,
		"fallback": "mingcute:flight-inflight-line",
	});
}

export default Component;
