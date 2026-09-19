import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/nwmc07bba.css';
import '../../css/g/g6gpvzb5o.css';
import '../../css/g/g6glzqbbm.css';
import '../../css/d/d4wo8ng0w.css';
import '../../css/c/clm_6cczn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="nwmc07bba"/><rect class="g6gpvzb5o"/><rect class="g6glzqbbm"/><path class="d4wo8ng0w"/><path class="clm_6cczn"/></g>`,
		"fallback": "icon-park:chart-graph",
	});
}

export default Component;
