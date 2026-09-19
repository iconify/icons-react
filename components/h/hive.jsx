import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvc1t2bhl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvc1t2bhl"/>`,
		"fallback": "fa7-brands:hive",
	});
}

export default Component;
