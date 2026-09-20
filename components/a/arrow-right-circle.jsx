import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/p/p0bift.css';
import '../../css/j/j4_0cv.css';
import '../../css/b/b46h1j.css';
import '../../css/s/so-from-60.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c p0bift"/><path class="a0m25c j4_0cv"/><path class="a0m25c b46h1j"/>`,
		"fallback": "line-md:arrow-right-circle",
	});
}

export default Component;
