import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iixfqsbra.css';
import '../../css/h/h0lo410vx.css';
import '../../css/m/mt37ukw5j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iixfqsbra"/><path class="h0lo410vx"/><path class="mt37ukw5j"/>`,
		"fallback": "energy-icons:hydrogen-station-20",
	});
}

export default Component;
