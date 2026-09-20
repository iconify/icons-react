import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/o/odwtxx.css';
import '../../css/e/efzwqq.css';
import '../../css/s/so-from-8.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew odwtxx"/><path class="efzwqq iw1iew"/>`,
		"fallback": "line-md:computer-filled",
	});
}

export default Component;
