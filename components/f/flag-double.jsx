import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0zvpfb6v.css';
import '../../css/f/fuc2tybyp.css';
import '../../css/c/c2qod68bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p0zvpfb6v"/><path class="fuc2tybyp"/><path class="c2qod68bl"/></g>`,
		"fallback": "streamline-cyber-color:flag-double",
	});
}

export default Component;
