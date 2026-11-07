import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2fxdh14r.css';
import '../../css/e/e_29zdb8m.css';
import '../../css/c/c1r3dshtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h2fxdh14r"/><path class="e_29zdb8m"/><path class="c1r3dshtw"/>`,
		"fallback": "solar:calendar-search-bold",
	});
}

export default Component;
