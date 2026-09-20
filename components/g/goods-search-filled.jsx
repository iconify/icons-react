import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv5pi-bzy.css';
import '../../css/c/crj_bc0sa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv5pi-bzy"/><path clip-rule="evenodd" class="crj_bc0sa"/>`,
		"fallback": "lsicon:goods-search-filled",
	});
}

export default Component;
