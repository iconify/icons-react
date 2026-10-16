import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z76gmk76o.css';
import '../../css/q/qog7c2b7a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z76gmk76o"/><path class="qog7c2b7a"/>`,
		"fallback": "energy-icons:charger-solar-20",
	});
}

export default Component;
