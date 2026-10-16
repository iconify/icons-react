import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6t120hgc.css';
import '../../css/z/zln2gxb3r.css';
import '../../css/f/fq33uibus.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6t120hgc"/><path class="zln2gxb3r"/><path class="fq33uibus"/>`,
		"fallback": "energy-icons:clipboard-plus-20-bold",
	});
}

export default Component;
