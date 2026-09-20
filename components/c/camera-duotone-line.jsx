import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s07kv3b7t.css';
import '../../css/a/afv_f682n.css';
import '../../css/f/f4tfatmwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s07kv3b7t"/><path class="afv_f682n"/><circle class="f4tfatmwd"/></g>`,
		"fallback": "lets-icons:camera-duotone-line",
	});
}

export default Component;
