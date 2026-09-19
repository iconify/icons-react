import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/y/ykn9kmspw.css';
import '../../css/m/muwu43bhw.css';
import '../../css/d/d2h2e9b4y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ykn9kmspw"/><path class="muwu43bhw"/><path class="d2h2e9b4y"/></g>`,
		"fallback": "icon-park-outline:bye",
	});
}

export default Component;
