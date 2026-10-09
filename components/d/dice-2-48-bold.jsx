import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzp1g281f.css';
import '../../css/u/u32gxcc6r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzp1g281f"/><path class="u32gxcc6r"/>`,
		"fallback": "energy-icons:dice-2-48-bold",
	});
}

export default Component;
