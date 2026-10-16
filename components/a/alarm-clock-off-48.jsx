import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5mhtjb5j.css';
import '../../css/l/lnepfmblf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5mhtjb5j"/><path class="lnepfmblf"/>`,
		"fallback": "energy-icons:alarm-clock-off-48",
	});
}

export default Component;
