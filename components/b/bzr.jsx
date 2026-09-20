import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxd3y1b3a.css';
import '../../css/r/rtb6i2lma.css';
import '../../css/i/i6hc7lykz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxd3y1b3a"/><path class="rtb6i2lma"/><path class="i6hc7lykz"/>`,
		"fallback": "token:bzr",
	});
}

export default Component;
