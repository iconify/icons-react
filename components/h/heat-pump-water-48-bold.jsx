import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftc5aebjh.css';
import '../../css/f/fe1-tbc_v.css';
import '../../css/m/mhimm6b_a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftc5aebjh"/><path class="fe1-tbc_v"/><path class="mhimm6b_a"/>`,
		"fallback": "energy-icons:heat-pump-water-48-bold",
	});
}

export default Component;
