import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdos38jip.css';
import '../../css/o/oe6sgfopr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdos38jip"/><path class="oe6sgfopr"/>`,
		"fallback": "energy-icons:file-48-bold",
	});
}

export default Component;
