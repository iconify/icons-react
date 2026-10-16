import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk7d7db1k.css';
import '../../css/i/iq3tm2n6h.css';
import '../../css/u/uhrotbb7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk7d7db1k"/><path class="iq3tm2n6h"/><path class="uhrotbb7z"/>`,
		"fallback": "energy-icons:fire-alarm-48",
	});
}

export default Component;
