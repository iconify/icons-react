import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-wg9bz4o.css';
import '../../css/s/s1d8djbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-wg9bz4o"/><path clip-rule="evenodd" class="s1d8djbvs"/>`,
		"fallback": "mingcute:blessing-line",
	});
}

export default Component;
