import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/m4zh-02ad.css';
import '../../css/u/u3-ls_bgk.css';
import '../../css/s/sri4hhb8e.css';
import '../../css/a/adoqhr8vy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="m4zh-02ad"/><path class="u3-ls_bgk"/><path class="sri4hhb8e"/><path class="adoqhr8vy"/></g>`,
		"fallback": "matita:history",
	});
}

export default Component;
