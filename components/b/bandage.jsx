import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmh87urrf.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmh87urrf"/>`,
		"fallback": "fa6-solid:bandage",
	});
}

export default Component;
