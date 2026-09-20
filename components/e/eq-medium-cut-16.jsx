import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaa78ubuz.css';
import '../../css/a/a97bmzw_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaa78ubuz"/><path class="a97bmzw_z"/>`,
		"fallback": "qlementine-icons:eq-medium-cut-16",
	});
}

export default Component;
