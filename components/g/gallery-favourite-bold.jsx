import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9qd5__9z.css';
import '../../css/p/p93a1fbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r9qd5__9z"/><path class="p93a1fbiu"/>`,
		"fallback": "solar:gallery-favourite-bold",
	});
}

export default Component;
