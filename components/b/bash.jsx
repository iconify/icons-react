import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfttfe_2y.css';
import '../../css/k/kvn-2v0wt.css';
import '../../css/u/uj7ng7b-o.css';
import '../../css/v/vmxx54baz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qfttfe_2y"><path class="kvn-2v0wt"/><path class="uj7ng7b-o"/><path class="vmxx54baz"/></g>`,
		"fallback": "catppuccin:bash",
	});
}

export default Component;
