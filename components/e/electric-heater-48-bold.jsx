import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seho2dbyy.css';
import '../../css/w/wmbs3e3ue.css';
import '../../css/g/gikfybcho.css';
import '../../css/j/jc-p_wbxs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seho2dbyy"/><path class="wmbs3e3ue"/><path class="gikfybcho"/><path class="jc-p_wbxs"/>`,
		"fallback": "energy-icons:electric-heater-48-bold",
	});
}

export default Component;
