import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb1o4ibht.css';
import '../../css/n/ngyu4emsk.css';
import '../../css/x/xin1hzb7w.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb1o4ibht"/><path class="ngyu4emsk"/><path class="xin1hzb7w"/>`,
		"fallback": "flag:dk-4x3",
	});
}

export default Component;
