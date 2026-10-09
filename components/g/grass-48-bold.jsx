import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6j5_ubif.css';
import '../../css/d/dpee-7beg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6j5_ubif"/><path class="dpee-7beg"/>`,
		"fallback": "energy-icons:grass-48-bold",
	});
}

export default Component;
