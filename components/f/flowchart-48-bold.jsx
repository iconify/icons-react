import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iehgmbc0b.css';
import '../../css/x/x2zs-zbqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iehgmbc0b"/><path class="x2zs-zbqv"/>`,
		"fallback": "energy-icons:flowchart-48-bold",
	});
}

export default Component;
