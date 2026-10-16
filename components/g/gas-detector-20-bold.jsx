import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfzjs4b6t.css';
import '../../css/y/y4dvfdc8f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfzjs4b6t"/><path class="y4dvfdc8f"/>`,
		"fallback": "energy-icons:gas-detector-20-bold",
	});
}

export default Component;
