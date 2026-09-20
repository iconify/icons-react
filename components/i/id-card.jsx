import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pio0e7bsu.css';
import '../../css/w/wdohmybjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pio0e7bsu"/><path class="wdohmybjr"/>`,
		"fallback": "prime:id-card",
	});
}

export default Component;
