import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt-g2-3ta.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt-g2-3ta"/>`,
		"fallback": "fa7-brands:creative-commons-pd-alt",
	});
}

export default Component;
