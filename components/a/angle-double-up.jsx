import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo4avb77y.css';

const viewBox = {"width":1024,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo4avb77y"/>`,
		"fallback": "fa:angle-double-up",
	});
}

export default Component;
