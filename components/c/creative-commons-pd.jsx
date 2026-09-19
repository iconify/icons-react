import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-h5mpb_l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-h5mpb_l"/>`,
		"fallback": "fa7-brands:creative-commons-pd",
	});
}

export default Component;
