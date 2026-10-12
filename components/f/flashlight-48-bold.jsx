import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbn7xobus.css';
import '../../css/x/xz3gel1_a.css';
import '../../css/y/y4nt_6xmo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbn7xobus"/><path class="xz3gel1_a"/><path class="y4nt_6xmo"/>`,
		"fallback": "energy-icons:flashlight-48-bold",
	});
}

export default Component;
