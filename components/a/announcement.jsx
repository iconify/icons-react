import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfofu-cwe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfofu-cwe"/>`,
		"fallback": "zondicons:announcement",
	});
}

export default Component;
