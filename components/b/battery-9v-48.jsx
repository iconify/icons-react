import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gerffvb_e.css';
import '../../css/v/v5ofbw7zr.css';
import '../../css/m/m91h_kbuv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gerffvb_e"/><path class="v5ofbw7zr"/><path class="m91h_kbuv"/>`,
		"fallback": "energy-icons:battery-9v-48",
	});
}

export default Component;
