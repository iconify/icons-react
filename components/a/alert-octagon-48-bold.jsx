import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otpi8ybma.css';
import '../../css/r/rhawa5b1j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otpi8ybma"/><path class="rhawa5b1j"/>`,
		"fallback": "energy-icons:alert-octagon-48-bold",
	});
}

export default Component;
