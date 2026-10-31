import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djhr1bb5p.css';
import '../../css/p/p49sfo0gg.css';
import '../../css/y/y-o7ms42k.css';
import '../../css/p/pe0rmb8ad.css';
import '../../css/r/rt9v9sb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="djhr1bb5p wm-k"/><path class="p49sfo0gg wm-shine"/><path class="wm-shine y-o7ms42k"/><path class="pe0rmb8ad wm-shine"/><path class="rt9v9sb0t wm-shine"/></g>`,
		"fallback": "withicons-lunar:folder-up",
	});
}

export default Component;
