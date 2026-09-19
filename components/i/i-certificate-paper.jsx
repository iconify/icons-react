import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xl9_eirxh.css';
import '../../css/c/cpe4pb6ap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xl9_eirxh"/><path class="cpe4pb6ap"/></g>`,
		"fallback": "healthicons:i-certificate-paper",
	});
}

export default Component;
