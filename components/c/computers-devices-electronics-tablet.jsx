import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epcos0d9j.css';
import '../../css/o/ocymuzb7a.css';
import '../../css/x/x6uuzdbii.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epcos0d9j"/><path class="ocymuzb7a"/><path class="x6uuzdbii"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-tablet",
	});
}

export default Component;
