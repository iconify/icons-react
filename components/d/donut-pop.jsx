import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cul1c6h3i.css';
import '../../css/r/ruk43sbpo.css';
import '../../css/w/w7f5-dbuk.css';
import '../../css/l/lh-t3ybnt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cul1c6h3i"/><path class="ruk43sbpo"/><path class="w7f5-dbuk"/><path class="lh-t3ybnt"/></g>`,
		"fallback": "streamline-kameleon-color:donut-pop",
	});
}

export default Component;
