import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj3u4_bby.css';
import '../../css/k/kdqg7zpqi.css';
import '../../css/y/yb1t-pwor.css';
import '../../css/s/s6qd-zbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj3u4_bby"/><path clip-rule="evenodd" class="kdqg7zpqi"/><path class="yb1t-pwor"/><path class="s6qd-zbqk"/>`,
		"fallback": "solar:card-search-bold-duotone",
	});
}

export default Component;
