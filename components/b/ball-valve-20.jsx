import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-dszwbqw.css';
import '../../css/s/sc5zoti7t.css';
import '../../css/t/t3c7rx_mz.css';
import '../../css/g/gp6en2bhq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-dszwbqw"/><path class="sc5zoti7t"/><path class="t3c7rx_mz"/><path class="gp6en2bhq"/>`,
		"fallback": "energy-icons:ball-valve-20",
	});
}

export default Component;
