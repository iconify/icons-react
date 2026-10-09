import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfao_6b1t.css';
import '../../css/c/c00kytlfm.css';
import '../../css/k/ka9ab8bek.css';
import '../../css/h/hss0ro0-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfao_6b1t"/><path class="c00kytlfm"/><path class="ka9ab8bek"/><path class="hss0ro0-v"/>`,
		"fallback": "energy-icons:electric-tractor-48-bold",
	});
}

export default Component;
