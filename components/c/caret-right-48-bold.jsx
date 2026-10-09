import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dda_dvbmt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dda_dvbmt"/>`,
		"fallback": "energy-icons:caret-right-48-bold",
	});
}

export default Component;
