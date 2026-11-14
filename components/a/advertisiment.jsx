import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/attqy3b2k.css';
import '../../css/g/gyf239ipz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="attqy3b2k"/><path class="gyf239ipz"/></g>`,
		"fallback": "hugeicons:advertisiment",
	});
}

export default Component;
