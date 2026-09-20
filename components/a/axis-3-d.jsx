import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrmmcx55c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrmmcx55c"/>`,
		"fallback": "lucide:axis-3-d",
	});
}

export default Component;
