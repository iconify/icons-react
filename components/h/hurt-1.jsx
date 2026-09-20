import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkfyo6bss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkfyo6bss"/>`,
		"fallback": "subway:hurt-1",
	});
}

export default Component;
