import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaet4wb5s.css';
import '../../css/a/ape_a0b6w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaet4wb5s"/><path class="ape_a0b6w"/>`,
		"fallback": "energy-icons:code-block-48-bold",
	});
}

export default Component;
