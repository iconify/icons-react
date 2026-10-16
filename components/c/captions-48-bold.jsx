import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8314acox.css';
import '../../css/s/sy3lcl67n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8314acox"/><path class="sy3lcl67n"/>`,
		"fallback": "energy-icons:captions-48-bold",
	});
}

export default Component;
