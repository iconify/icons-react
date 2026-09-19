import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpcxkyugg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpcxkyugg"/>`,
		"fallback": "fa6-regular:copy",
	});
}

export default Component;
