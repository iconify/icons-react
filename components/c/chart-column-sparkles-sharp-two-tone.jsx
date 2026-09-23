import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/i/i1_mvd76s.css';
import '../../css/a/aczsw8qlb.css';
import '../../css/n/nsmv8c5kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="i1_mvd76s"/><path class="aczsw8qlb"/><path class="nsmv8c5kg"/></g>`,
		"fallback": "keyline-icons:chart-column-sparkles-sharp-two-tone",
	});
}

export default Component;
