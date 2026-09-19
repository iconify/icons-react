import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/a/a459j710d.css';
import '../../css/t/tblv8fb2h.css';
import '../../css/a/a58oazbjd.css';
import '../../css/r/riz8lqbnz.css';
import '../../css/r/rhk20g9nd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="a459j710d"/><path class="tblv8fb2h"/><circle class="a58oazbjd"/><circle class="riz8lqbnz"/><path class="rhk20g9nd"/></g>`,
		"fallback": "icon-park:gift-bag",
	});
}

export default Component;
