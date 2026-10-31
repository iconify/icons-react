import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t1jouzbzd.css';
import '../../css/m/me3mjr6uf.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="t1jouzbzd"/><path class="me3mjr6uf"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:drag-handle",
	});
}

export default Component;
