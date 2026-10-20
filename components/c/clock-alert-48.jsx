import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np5fhxbwq.css';
import '../../css/d/drz3_kbcl.css';
import '../../css/w/w6jg5vb_d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np5fhxbwq"/><path class="drz3_kbcl"/><path class="w6jg5vb_d"/>`,
		"fallback": "energy-icons:clock-alert-48",
	});
}

export default Component;
