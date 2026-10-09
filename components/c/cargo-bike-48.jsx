import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gladqriwb.css';
import '../../css/y/y4lv5l4vm.css';
import '../../css/k/k_e8n9b5o.css';
import '../../css/m/mvd344-pk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gladqriwb"/><path class="y4lv5l4vm"/><path class="k_e8n9b5o"/><path class="mvd344-pk"/>`,
		"fallback": "energy-icons:cargo-bike-48",
	});
}

export default Component;
