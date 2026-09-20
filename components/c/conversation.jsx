import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz1nfzvvx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz1nfzvvx"/>`,
		"fallback": "zondicons:conversation",
	});
}

export default Component;
