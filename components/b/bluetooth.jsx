import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/l/ltrzbc0ko.css';
import '../../css/w/w5tfnzbxl.css';
import '../../css/n/n0rtt9b9i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="ltrzbc0ko"/><path class="w5tfnzbxl"/><path class="n0rtt9b9i"/></g>`,
		"fallback": "streamline-kameleon-color:bluetooth",
	});
}

export default Component;
