import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meo_3-l_k.css';
import '../../css/d/d4tgy6_gn.css';
import '../../css/l/lvwy1yo9v.css';
import '../../css/i/iuph7tb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meo_3-l_k"/><path class="d4tgy6_gn"/><path class="lvwy1yo9v"/><path class="iuph7tb3w"/>`,
		"fallback": "token:axe",
	});
}

export default Component;
