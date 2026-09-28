import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3-nuobqq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3-nuobqq"/>`,
		"fallback": "pinhead:car-beside-bench-on-ground",
	});
}

export default Component;
