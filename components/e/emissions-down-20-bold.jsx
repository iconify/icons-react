import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onux0z-vm.css';
import '../../css/f/f5m_ylwro.css';
import '../../css/v/vvusakkjr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onux0z-vm"/><path class="f5m_ylwro"/><path class="vvusakkjr"/>`,
		"fallback": "energy-icons:emissions-down-20-bold",
	});
}

export default Component;
