import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdrt4wkoq.css';
import '../../css/i/iqx5v6bmq.css';
import '../../css/r/r00bsm39p.css';
import '../../css/a/arlkf5b-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdrt4wkoq"/><path class="iqx5v6bmq"/><path class="r00bsm39p"/><path class="arlkf5b-p"/>`,
		"fallback": "energy-icons:camera-switch-48-bold",
	});
}

export default Component;
