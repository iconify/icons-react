import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne7p8x31a.css';
import '../../css/f/fohdu3hry.css';
import '../../css/f/fp6ugybfx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne7p8x31a"/><path class="fohdu3hry"/><path class="fp6ugybfx"/>`,
		"fallback": "carbon:id-management",
	});
}

export default Component;
