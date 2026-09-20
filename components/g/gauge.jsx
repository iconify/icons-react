import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-qc0_vlp.css';
import '../../css/a/amj39fbui.css';
import '../../css/x/xvig2ib6l.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-qc0_vlp"/><path class="amj39fbui"/><path class="xvig2ib6l"/>`,
		"fallback": "iwwa:gauge",
	});
}

export default Component;
