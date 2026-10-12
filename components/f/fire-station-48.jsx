import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st531kb5s.css';
import '../../css/e/etimskbbu.css';
import '../../css/r/rw1twdhke.css';
import '../../css/h/hp8bhknya.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st531kb5s"/><path class="etimskbbu"/><path class="rw1twdhke"/><path class="hp8bhknya"/>`,
		"fallback": "energy-icons:fire-station-48",
	});
}

export default Component;
