import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0509qe2b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u0509qe2b"/>`,
		"fallback": "streamline:browser-build-remix",
	});
}

export default Component;
