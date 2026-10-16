import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpapdbc8v.css';
import '../../css/y/yeva_mbnv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpapdbc8v"/><path class="yeva_mbnv"/>`,
		"fallback": "energy-icons:immersion-heater-48",
	});
}

export default Component;
