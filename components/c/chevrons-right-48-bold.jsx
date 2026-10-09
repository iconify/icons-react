import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grgrw979e.css';
import '../../css/w/wu8h8ib5y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grgrw979e"/><path class="wu8h8ib5y"/>`,
		"fallback": "energy-icons:chevrons-right-48-bold",
	});
}

export default Component;
