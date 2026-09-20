import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lxc9w6ber.css';
import '../../css/p/pz7kdm_1c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="lxc9w6ber"/><path class="pz7kdm_1c"/></g>`,
		"fallback": "streamline-plump-color:airplane-enabled",
	});
}

export default Component;
