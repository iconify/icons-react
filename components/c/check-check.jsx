import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sni7761ib.css';
import '../../css/b/b79dlu74u.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sni7761ib wm-k"/><path class="b79dlu74u wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:check-check",
	});
}

export default Component;
