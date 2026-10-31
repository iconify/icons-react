import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/flv_itj1h.css';
import '../../css/s/sb3ejhbzu.css';
import '../../css/c/czs7wwqzy.css';
import '../../css/s/slu4csbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="flv_itj1h"/><path class="sb3ejhbzu wm-k"/><path class="czs7wwqzy wm-a"/><path class="slu4csbtz wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bat",
	});
}

export default Component;
