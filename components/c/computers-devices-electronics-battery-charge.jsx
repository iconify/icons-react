import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk6bicnte.css';
import '../../css/d/dh6tuqe-f.css';
import '../../css/t/tjb6i-jcq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk6bicnte"/><path class="dh6tuqe-f"/><path class="tjb6i-jcq"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-battery-charge",
	});
}

export default Component;
