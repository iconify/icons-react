import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbr1am0tu.css';
import '../../css/t/tlsd_fw4s.css';
import '../../css/s/szs1icb1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbr1am0tu"/><path class="tlsd_fw4s"/><path class="szs1icb1v"/>`,
		"fallback": "energy-icons:chart-pie-half-48",
	});
}

export default Component;
