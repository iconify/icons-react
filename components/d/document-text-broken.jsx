import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qudpijb7v.css';
import '../../css/g/goexq_bdp.css';
import '../../css/s/sgjshnbod.css';
import '../../css/h/h4m9tpedx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qudpijb7v"/><path class="goexq_bdp"/><path class="sgjshnbod"/><path class="h4m9tpedx"/></g>`,
		"fallback": "solar:document-text-broken",
	});
}

export default Component;
