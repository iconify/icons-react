import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/i/ickm1abrn.css';
import '../../css/z/zppuvabay.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="ickm1abrn"/><path class="zppuvabay"/>`,
		"fallback": "ant-design:close-square-twotone",
	});
}

export default Component;
