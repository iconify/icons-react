import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmvxxq8gs.css';
import '../../css/h/hp5tah2eg.css';
import '../../css/y/yjd0h8bmh.css';
import '../../css/o/og4walbcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmvxxq8gs"/><path class="hp5tah2eg"/><path class="yjd0h8bmh"/><path class="og4walbcm"/>`,
		"fallback": "energy-icons:biomass-48-bold",
	});
}

export default Component;
