import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2txoccoh.css';
import '../../css/w/w37lp3bjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2txoccoh"/><path clip-rule="evenodd" class="w37lp3bjt"/>`,
		"fallback": "solar:hiking-minimalistic-bold",
	});
}

export default Component;
