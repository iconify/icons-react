import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llrp2r34b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llrp2r34b"/>`,
		"fallback": "fluent-emoji-high-contrast:cityscape-at-dusk",
	});
}

export default Component;
