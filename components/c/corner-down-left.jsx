import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7topbc7p.css';
import '../../css/y/y-2fyb7dc.css';
import '../../css/n/nx_c71bej.css';
import '../../css/a/a5npzmxwb.css';
import '../../css/t/trqas1bsk.css';
import '../../css/t/t6r516rjh.css';
import '../../css/c/cuuqixnhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7topbc7p wm-shadow"/><path class="wm-k y-2fyb7dc"/><path class="nx_c71bej wm-k"/><path class="a5npzmxwb wm-k"/><path class="trqas1bsk wm-k"/><path class="t6r516rjh wm-k"/><path class="cuuqixnhm wm-shine"/>`,
		"fallback": "withicons-pastel:corner-down-left",
	});
}

export default Component;
