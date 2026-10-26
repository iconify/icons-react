import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m56wcnbmc.css';

const viewBox = {"width":366.08,"height":298.83,"left":-3.29,"top":29.96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m56wcnbmc"/>`,
		"fallback": "thesvg:in-toto",
	});
}

export default Component;
