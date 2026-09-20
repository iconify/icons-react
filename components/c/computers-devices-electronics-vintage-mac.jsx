import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzvt0ewxd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzvt0ewxd"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-vintage-mac",
	});
}

export default Component;
