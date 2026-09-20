import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caf4w40kg.css';
import '../../css/v/vqmcn9mpk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caf4w40kg"/><path class="vqmcn9mpk"/>`,
		"fallback": "ooui:function-argument-ltr",
	});
}

export default Component;
