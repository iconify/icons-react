import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh-es2avx.css';
import '../../css/x/x8lr6rehc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh-es2avx"/><path class="x8lr6rehc"/>`,
		"fallback": "energy-icons:image-off-20-bold",
	});
}

export default Component;
