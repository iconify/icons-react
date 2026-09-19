import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/d/du_1q6b0d.css';
import '../../css/d/dxbqeo6es.css';
import '../../css/l/lq78wnbxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="du_1q6b0d"/><path class="dxbqeo6es"/><path class="lq78wnbxw"/></g>`,
		"fallback": "icon-park-solid:boxing",
	});
}

export default Component;
