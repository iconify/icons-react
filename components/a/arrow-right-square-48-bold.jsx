import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbu-t6btd.css';
import '../../css/w/wou0m8doy.css';
import '../../css/g/gpajhpb2s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbu-t6btd"/><path class="wou0m8doy"/><path class="gpajhpb2s"/>`,
		"fallback": "energy-icons:arrow-right-square-48-bold",
	});
}

export default Component;
