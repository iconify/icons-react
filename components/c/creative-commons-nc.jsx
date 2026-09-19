import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo3k98bmp.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo3k98bmp"/>`,
		"fallback": "fa-brands:creative-commons-nc",
	});
}

export default Component;
