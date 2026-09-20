import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/oikkfrqjb.css';
import '../../css/t/t8oad9btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="oikkfrqjb"/><path class="t8oad9btl"/></g>`,
		"fallback": "streamline-cyber:flag-3",
	});
}

export default Component;
