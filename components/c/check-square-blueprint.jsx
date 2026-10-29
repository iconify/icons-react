import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i_gofrd_r.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/so7639bqv.css';
import '../../css/i/i4t66q3an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="i_gofrd_r wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="so7639bqv wm-k"/><path class="i4t66q3an wm-a"/></g>`,
		"fallback": "withicons:check-square-blueprint",
	});
}

export default Component;
