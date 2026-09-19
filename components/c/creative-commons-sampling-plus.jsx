import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frzdw0c2f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frzdw0c2f"/>`,
		"fallback": "fa7-brands:creative-commons-sampling-plus",
	});
}

export default Component;
