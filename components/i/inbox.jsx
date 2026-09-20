import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0crjlb2w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0crjlb2w"/>`,
		"fallback": "zondicons:inbox",
	});
}

export default Component;
