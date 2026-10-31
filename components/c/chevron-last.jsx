import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/ln0kt8b-x.css';
import '../../css/z/zhjtmfbrj.css';
import '../../css/s/s0kcf3b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ln0kt8b-x wm-k"/><path class="wm-a zhjtmfbrj"/><path class="s0kcf3b3u wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chevron-last",
	});
}

export default Component;
