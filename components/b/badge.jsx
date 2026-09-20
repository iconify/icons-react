import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avu3_us6d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avu3_us6d"/>`,
		"fallback": "zondicons:badge",
	});
}

export default Component;
