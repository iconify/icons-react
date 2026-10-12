import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiecv_t_z.css';
import '../../css/w/wryrt8b-k.css';
import '../../css/f/f5yzw-ygz.css';
import '../../css/u/ulazcvbqa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiecv_t_z"/><path class="wryrt8b-k"/><path class="f5yzw-ygz"/><path class="ulazcvbqa"/>`,
		"fallback": "energy-icons:ambulance-48-bold",
	});
}

export default Component;
