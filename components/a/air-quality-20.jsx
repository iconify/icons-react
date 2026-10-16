import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy2bf7d2l.css';
import '../../css/x/xr0hl1ndv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy2bf7d2l"/><path class="xr0hl1ndv"/>`,
		"fallback": "energy-icons:air-quality-20",
	});
}

export default Component;
