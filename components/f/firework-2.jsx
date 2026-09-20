import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o-g10y6fs.css';
import '../../css/i/i850ewbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o-g10y6fs"/><path class="i850ewbir"/></g>`,
		"fallback": "streamline-ultimate:firework-2",
	});
}

export default Component;
