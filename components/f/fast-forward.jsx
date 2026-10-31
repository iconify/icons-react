import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zey8rubqr.css';
import '../../css/x/xjsuye19a.css';
import '../../css/m/mf3_dkb4y.css';
import '../../css/g/g052_gijf.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="zey8rubqr"/><path class="wm-shine xjsuye19a"/><path class="mf3_dkb4y wm-k"/><path class="g052_gijf wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:fast-forward",
	});
}

export default Component;
