import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0_hpn4wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r0_hpn4wk"/>`,
		"fallback": "reicon:bulb-bolt-filled",
	});
}

export default Component;
