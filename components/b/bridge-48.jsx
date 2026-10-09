import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_e3wgwgv.css';
import '../../css/t/tgihwabmg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_e3wgwgv"/><path class="tgihwabmg"/>`,
		"fallback": "energy-icons:bridge-48",
	});
}

export default Component;
