import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqgchhb5i.css';
import '../../css/i/i5i-ymejz.css';
import '../../css/m/manzvwbsi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqgchhb5i"/><path class="i5i-ymejz"/><path class="manzvwbsi"/>`,
		"fallback": "energy-icons:fan-48",
	});
}

export default Component;
