import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj5vjvkzr.css';
import '../../css/b/b12gxvr_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj5vjvkzr"/><circle class="b12gxvr_k"/>`,
		"fallback": "bx:bxs-yin-yang",
	});
}

export default Component;
