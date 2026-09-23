import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/l/leih2zbox.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/i/i2j9gzb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x9emg4bdv"/><path class="leih2zbox"/><path class="xon_9ib8a"/><path class="i2j9gzb7h"/></g>`,
		"fallback": "keyline-icons:chart-gantt-sparkles-duotone",
	});
}

export default Component;
