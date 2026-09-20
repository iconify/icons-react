import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpd8tnbks.css';
import '../../css/y/yzp5midtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpd8tnbks"/><path class="yzp5midtp"/>`,
		"fallback": "pixel:comment-quote",
	});
}

export default Component;
