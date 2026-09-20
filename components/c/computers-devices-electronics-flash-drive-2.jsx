import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh99j7bbd.css';
import '../../css/x/xytczabbj.css';
import '../../css/f/fe7n8hbyk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh99j7bbd"/><path class="xytczabbj"/><path class="fe7n8hbyk"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-flash-drive-2",
	});
}

export default Component;
