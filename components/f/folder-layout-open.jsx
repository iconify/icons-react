import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0djsxb9c.css';
import '../../css/o/oytr_p5za.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0djsxb9c"/><path class="oytr_p5za"/>`,
		"fallback": "material-icon-theme:folder-layout-open",
	});
}

export default Component;
