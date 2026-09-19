import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzafr3b3p.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzafr3b3p"/>`,
		"fallback": "fa-brands:creative-commons-pd-alt",
	});
}

export default Component;
