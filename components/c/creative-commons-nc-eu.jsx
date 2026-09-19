import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf51w1b1t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf51w1b1t"/>`,
		"fallback": "fa7-brands:creative-commons-nc-eu",
	});
}

export default Component;
