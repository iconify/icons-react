import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mheydraer.css';
import '../../css/v/vrwv3ubdj.css';
import '../../css/l/lheu_vbwv.css';
import '../../css/t/tq_15om_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mheydraer"/><path class="vrwv3ubdj"/><path class="lheu_vbwv"/><path class="tq_15om_e"/>`,
		"fallback": "energy-icons:gravity-storage-48-bold",
	});
}

export default Component;
