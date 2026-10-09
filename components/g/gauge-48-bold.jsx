import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_q60hbmc.css';
import '../../css/v/vlw_01baz.css';
import '../../css/g/gxf5i4yhj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_q60hbmc"/><path class="vlw_01baz"/><path class="gxf5i4yhj"/>`,
		"fallback": "energy-icons:gauge-48-bold",
	});
}

export default Component;
