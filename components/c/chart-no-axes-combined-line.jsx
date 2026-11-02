import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsfernben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsfernben"/>`,
		"fallback": "mingcute:chart-no-axes-combined-line",
	});
}

export default Component;
