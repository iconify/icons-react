import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f2_0pzb1i.css';
import '../../css/n/nvvzh7gci.css';
import '../../css/f/fl81m1b7u.css';
import '../../css/x/xs8wlqfph.css';
import '../../css/c/cve__fbjc.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="f2_0pzb1i wm-shadow"/><path class="nvvzh7gci"/><path class="fl81m1b7u"/><path class="xs8wlqfph"/><path class="cve__fbjc wm-shine"/><path class="akvr8ibym wm-deco"/></g>`,
		"fallback": "withicons-sticker:chevron-first",
	});
}

export default Component;
