import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq8x0oj0m.css';
import '../../css/g/gi40zsmhu.css';
import '../../css/a/a1okgrd2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq8x0oj0m"/><path class="gi40zsmhu"/><path clip-rule="evenodd" class="a1okgrd2g"/>`,
		"fallback": "solar:banknote-2-bold",
	});
}

export default Component;
