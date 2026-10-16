import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsmhpgwcs.css';
import '../../css/f/fc_5vwb2s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsmhpgwcs"/><path class="fc_5vwb2s"/>`,
		"fallback": "energy-icons:aspect-ratio-48",
	});
}

export default Component;
