import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ah1iiubfc.css';
import '../../css/i/i6tcmibtw.css';
import '../../css/r/rzb8izb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ah1iiubfc"/><path class="i6tcmibtw"/><path class="rzb8izb8n"/></g>`,
		"fallback": "lucide:file-chart-pie",
	});
}

export default Component;
