import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwny0ub1v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwny0ub1v"/>`,
		"fallback": "fa6-solid:hand-lizard",
	});
}

export default Component;
