import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2l2_ebga.css';
import '../../css/g/gjxcd2b_y.css';
import '../../css/e/ebxyc5bix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2l2_ebga"/><path class="gjxcd2b_y"/><path class="ebxyc5bix"/>`,
		"fallback": "energy-icons:carrot-48",
	});
}

export default Component;
