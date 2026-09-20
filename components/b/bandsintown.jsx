import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nivi21b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nivi21b7o"/>`,
		"fallback": "thesvg:bandsintown",
	});
}

export default Component;
