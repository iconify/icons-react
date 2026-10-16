import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djvqpt-nt.css';
import '../../css/i/i3kvsjzmy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djvqpt-nt"/><path class="i3kvsjzmy"/>`,
		"fallback": "energy-icons:address-book-48-bold",
	});
}

export default Component;
