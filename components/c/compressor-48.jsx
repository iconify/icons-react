import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnw5nvftm.css';
import '../../css/q/q177d-m0y.css';
import '../../css/h/h7hp1q67c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnw5nvftm"/><path class="q177d-m0y"/><path class="h7hp1q67c"/>`,
		"fallback": "energy-icons:compressor-48",
	});
}

export default Component;
