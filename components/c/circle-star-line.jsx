import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doctnrb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doctnrb2p"/>`,
		"fallback": "mingcute:circle-star-line",
	});
}

export default Component;
