import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdrt4wkoq.css';
import '../../css/i/iwhux3djk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdrt4wkoq"/><path class="iwhux3djk"/>`,
		"fallback": "energy-icons:camera-48-bold",
	});
}

export default Component;
