import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4844qbfw.css';
import '../../css/v/v23rzsocn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4844qbfw"/><path class="v23rzsocn"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-harddisk",
	});
}

export default Component;
