import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlsrljbwz.css';
import '../../css/c/cdtctobwy.css';
import '../../css/s/spr4jhb3d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlsrljbwz"/><path class="cdtctobwy"/><path class="spr4jhb3d"/>`,
		"fallback": "energy-icons:cybersecurity-48",
	});
}

export default Component;
