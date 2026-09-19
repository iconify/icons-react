import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj3ijhgye.css';
import '../../css/x/x72vtmf2a.css';
import '../../css/k/kt_6d8b9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bj3ijhgye"/><path class="x72vtmf2a"/><path class="kt_6d8b9l"/></g>`,
		"fallback": "healthicons:antibody",
	});
}

export default Component;
