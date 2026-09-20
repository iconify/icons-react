import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8a6n4b0g.css';
import '../../css/m/mk8vnacjn.css';
import '../../css/p/p82_svbfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8a6n4b0g"/><path class="mk8vnacjn"/><path class="p82_svbfz"/></g>`,
		"fallback": "streamline-kameleon-color:download-cloud-duo",
	});
}

export default Component;
