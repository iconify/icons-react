import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3df32ggd.css';
import '../../css/r/rsbp7epmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3df32ggd"/><path class="rsbp7epmi"/>`,
		"fallback": "pixel:futurism",
	});
}

export default Component;
