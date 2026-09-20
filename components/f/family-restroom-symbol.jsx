import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxo33drqq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxo33drqq"/>`,
		"fallback": "pinhead:family-restroom-symbol",
	});
}

export default Component;
