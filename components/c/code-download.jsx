import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/u52o0g_xp.css';
import '../../css/c/cndo6138b.css';
import '../../css/i/i266yibok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="u52o0g_xp"/><path class="cndo6138b"/><path class="i266yibok"/></g>`,
		"fallback": "icon-park-outline:code-download",
	});
}

export default Component;
