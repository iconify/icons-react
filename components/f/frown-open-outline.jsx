import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jzh3nbban.css';
import '../../css/k/kg11nj89m.css';
import '../../css/l/l4qf8vk5b.css';
import '../../css/s/s5ognfy_z.css';
import '../../css/k/kiqr8zzyi.css';
import '../../css/p/peejenwcc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jzh3nbban"/><path class="kg11nj89m"/><path clip-rule="evenodd" class="l4qf8vk5b"/><path clip-rule="evenodd" class="s5ognfy_z"/><path class="kiqr8zzyi"/><path clip-rule="evenodd" class="peejenwcc"/></g>`,
		"fallback": "glyphs:frown-open-outline",
	});
}

export default Component;
