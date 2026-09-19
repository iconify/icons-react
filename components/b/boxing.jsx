import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/v/vwy9_8b3h.css';
import '../../css/l/lq78wnbxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="vwy9_8b3h"/><path class="lq78wnbxw"/></g>`,
		"fallback": "icon-park-outline:boxing",
	});
}

export default Component;
