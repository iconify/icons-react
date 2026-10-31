import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgyhjzbke.css';
import '../../css/s/szd6vkbpt.css';
import '../../css/v/vse-5cb2o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xgyhjzbke"/><path class="szd6vkbpt"/><path class="vse-5cb2o"/></g>`,
		"fallback": "streamline-kameleon-color:favorite-file-pop",
	});
}

export default Component;
