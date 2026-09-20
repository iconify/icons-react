import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp1t9ibhn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp1t9ibhn"/>`,
		"fallback": "pinhead:canoe",
	});
}

export default Component;
