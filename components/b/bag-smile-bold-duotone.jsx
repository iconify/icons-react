import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg3heibao.css';
import '../../css/i/i9yzznx8e.css';
import '../../css/t/t1r1agbba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg3heibao"/><path class="i9yzznx8e"/><path class="t1r1agbba"/>`,
		"fallback": "solar:bag-smile-bold-duotone",
	});
}

export default Component;
