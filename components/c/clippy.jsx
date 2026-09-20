import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9q778crg.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9q778crg"/>`,
		"fallback": "octicon:clippy",
	});
}

export default Component;
