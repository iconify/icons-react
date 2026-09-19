import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga-2uf8mc.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga-2uf8mc"/>`,
		"fallback": "fa6-brands:creative-commons",
	});
}

export default Component;
