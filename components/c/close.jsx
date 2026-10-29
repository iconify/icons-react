import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tje-abbuo.css';
import '../../css/o/ouqw72bnf.css';
import '../../css/v/vq9mycbnp.css';
import '../../css/k/k17oehb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tje-abbuo wm-k"/><path class="ouqw72bnf wm-k"/><path class="vq9mycbnp wm-k"/><path class="k17oehb3u wm-shine"/></g>`,
		"fallback": "withicons-anime:close",
	});
}

export default Component;
