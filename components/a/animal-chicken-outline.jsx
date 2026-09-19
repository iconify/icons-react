import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/beh8lpbik.css';
import '../../css/a/axt58fw6s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="beh8lpbik"/><path clip-rule="evenodd" class="axt58fw6s"/></g>`,
		"fallback": "healthicons:animal-chicken-outline",
	});
}

export default Component;
