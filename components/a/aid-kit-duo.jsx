import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttbiemmoy.css';
import '../../css/j/j1gg5rbgb.css';
import '../../css/b/bunbr1brm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ttbiemmoy"/><path clip-rule="evenodd" class="j1gg5rbgb"/><path class="bunbr1brm"/></g>`,
		"fallback": "streamline-kameleon-color:aid-kit-duo",
	});
}

export default Component;
