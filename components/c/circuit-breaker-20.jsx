import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo1eldb9g.css';
import '../../css/s/s6o8xgbyi.css';
import '../../css/t/tcpd3kbos.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo1eldb9g"/><path class="s6o8xgbyi"/><path class="tcpd3kbos"/>`,
		"fallback": "energy-icons:circuit-breaker-20",
	});
}

export default Component;
