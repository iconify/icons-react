import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sljumkblh.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sljumkblh"/>`,
		"fallback": "fa-solid:baseball-ball",
	});
}

export default Component;
