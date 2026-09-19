import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut_kj5bvn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut_kj5bvn"/>`,
		"fallback": "fa-solid:feather-alt",
	});
}

export default Component;
