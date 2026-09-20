import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-lhw1bdi.css';
import '../../css/g/gjskco46o.css';
import '../../css/c/c70knuxun.css';
import '../../css/m/mkyk_ebea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-lhw1bdi"/><path class="gjskco46o"/><path class="c70knuxun"/><path class="mkyk_ebea"/></g>`,
		"fallback": "streamline-cyber-color:coffee-cup-hot-2",
	});
}

export default Component;
