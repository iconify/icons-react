import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pl7qj611r.css';
import '../../css/u/us2cgebqb.css';
import '../../css/x/xym5cc-rx.css';
import '../../css/r/riz8lqbnz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="pl7qj611r"/><path class="us2cgebqb"/><rect class="xym5cc-rx"/><circle class="riz8lqbnz"/></g>`,
		"fallback": "icon-park:baseball-cap",
	});
}

export default Component;
