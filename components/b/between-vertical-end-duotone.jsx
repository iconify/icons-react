import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6g98xbwd.css';
import '../../css/z/zkawf4u1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v6g98xbwd"/><path class="zkawf4u1m"/></g>`,
		"fallback": "lucide-extended:between-vertical-end-duotone",
	});
}

export default Component;
