import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wslkg7oxz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wslkg7oxz"/>`,
		"fallback": "ion:card-sharp",
	});
}

export default Component;
