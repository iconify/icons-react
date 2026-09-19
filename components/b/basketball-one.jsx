import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzpvswwbv.css';
import '../../css/z/zq73dz1kp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kzpvswwbv"/><path class="zq73dz1kp"/></g>`,
		"fallback": "icon-park-outline:basketball-one",
	});
}

export default Component;
