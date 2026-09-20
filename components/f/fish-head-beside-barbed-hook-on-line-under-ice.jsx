import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smgqmefax.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smgqmefax"/>`,
		"fallback": "pinhead:fish-head-beside-barbed-hook-on-line-under-ice",
	});
}

export default Component;
