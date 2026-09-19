import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul1s29bis.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul1s29bis"/>`,
		"fallback": "fa6-regular:face-sad-cry",
	});
}

export default Component;
