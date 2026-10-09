import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbu-t6btd.css';
import '../../css/u/use3a0b1x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbu-t6btd"/><path class="use3a0b1x"/>`,
		"fallback": "energy-icons:chevron-right-square-48-bold",
	});
}

export default Component;
