import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s0hfy1b4i.css';
import '../../css/u/ukld4nbqg.css';
import '../../css/b/bk153zpaw.css';
import '../../css/q/qw20mr6si.css';
import '../../css/o/ottnm3b1w.css';
import '../../css/e/ea6bvv42w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="s0hfy1b4i wm-shadow"/><path class="ukld4nbqg"/><path class="bk153zpaw"/><path class="qw20mr6si"/><path class="ottnm3b1w"/><path class="ea6bvv42w"/></g>`,
		"fallback": "withicons-retro:factory",
	});
}

export default Component;
