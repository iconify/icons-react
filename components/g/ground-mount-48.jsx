import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p270hkbyv.css';
import '../../css/l/l9etfhdic.css';
import '../../css/r/r1ehujbqp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p270hkbyv"/><path class="l9etfhdic"/><path class="r1ehujbqp"/>`,
		"fallback": "energy-icons:ground-mount-48",
	});
}

export default Component;
