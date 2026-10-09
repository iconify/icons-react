import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw2u6puwh.css';
import '../../css/r/r_oqf1inc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw2u6puwh"/><path class="r_oqf1inc"/>`,
		"fallback": "energy-icons:insulation-roll-48",
	});
}

export default Component;
