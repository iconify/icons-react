import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h33-fip6j.css';
import '../../css/p/pug8hsa2n.css';
import '../../css/e/e7s-4vlpk.css';
import '../../css/j/js4khac8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h33-fip6j"/><circle class="pug8hsa2n"/><circle class="e7s-4vlpk"/><path class="js4khac8n"/></g>`,
		"fallback": "evicons:bus-electric",
	});
}

export default Component;
