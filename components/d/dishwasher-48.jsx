import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smfo77bmv.css';
import '../../css/q/qq6_d0bdg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smfo77bmv"/><path class="qq6_d0bdg"/>`,
		"fallback": "energy-icons:dishwasher-48",
	});
}

export default Component;
