import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zfcxzfb3g.css';
import '../../css/s/so0578brv.css';
import '../../css/m/mhj5t0-oi.css';
import '../../css/i/i4ag0ebzd.css';
import '../../css/i/iexsup4dq.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow zfcxzfb3g"/><path class="so0578brv"/><path class="mhj5t0-oi"/><path class="i4ag0ebzd"/><path class="iexsup4dq wm-shine"/><path class="akvr8ibym wm-deco"/></g>`,
		"fallback": "withicons-sticker:chevron-down",
	});
}

export default Component;
