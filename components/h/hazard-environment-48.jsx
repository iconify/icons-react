import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azssgq8vo.css';
import '../../css/f/fb-tfrrxs.css';
import '../../css/d/dq17-kjgo.css';
import '../../css/e/eo_cd6ble.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azssgq8vo"/><path class="fb-tfrrxs"/><path class="dq17-kjgo"/><path class="eo_cd6ble"/>`,
		"fallback": "energy-icons:hazard-environment-48",
	});
}

export default Component;
