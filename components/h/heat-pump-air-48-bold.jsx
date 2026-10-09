import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mokpnsr8g.css';
import '../../css/h/ha9ji7bbv.css';
import '../../css/l/lo-76q32a.css';
import '../../css/j/jo56bbk_e.css';
import '../../css/m/mhiv-6b-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mokpnsr8g"/><path class="ha9ji7bbv"/><path class="lo-76q32a"/><path class="jo56bbk_e"/><path class="mhiv-6b-w"/>`,
		"fallback": "energy-icons:heat-pump-air-48-bold",
	});
}

export default Component;
