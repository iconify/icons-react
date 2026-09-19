import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-fh5kbgy.css';
import '../../css/n/nw5k1bbvg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-fh5kbgy"/><path class="nw5k1bbvg"/>`,
		"fallback": "garden:clipboard-list-stroke-12",
	});
}

export default Component;
