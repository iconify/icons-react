import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/d/dnyzfh5ly.css';
import '../../css/e/ehvc08b_v.css';
import '../../css/z/z8hr5m3_r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="dnyzfh5ly"/><path class="ehvc08b_v"/><path class="z8hr5m3_r"/></g>`,
		"fallback": "streamline-kameleon-color:bank-pop",
	});
}

export default Component;
