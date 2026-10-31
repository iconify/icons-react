import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mu8p_tbuc.css';
import '../../css/q/qgoo28zqg.css';
import '../../css/l/lskufrbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mu8p_tbuc wm-k"/><path class="qgoo28zqg wm-a"/><path class="lskufrbgk wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chevrons-down",
	});
}

export default Component;
