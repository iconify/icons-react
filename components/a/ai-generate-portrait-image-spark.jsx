import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/p/p-3ux2bck.css';
import '../../css/j/jmqcvacjt.css';
import '../../css/u/u8k8dlbfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="p-3ux2bck"/><path class="jmqcvacjt"/><path class="u8k8dlbfz"/></g>`,
		"fallback": "streamline-plump:ai-generate-portrait-image-spark",
	});
}

export default Component;
