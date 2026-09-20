import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwgnjtbeu.css';
import '../../css/y/yqicoj3_e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwgnjtbeu"/><path class="yqicoj3_e"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-television-vintage",
	});
}

export default Component;
