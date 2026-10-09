import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shtfijqih.css';
import '../../css/i/ibp9wvvmi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shtfijqih"/><path class="ibp9wvvmi"/>`,
		"fallback": "energy-icons:euro-48",
	});
}

export default Component;
