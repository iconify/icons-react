import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilg_98b5z.css';
import '../../css/z/z5ckwp2dk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilg_98b5z"/><path class="z5ckwp2dk"/>`,
		"fallback": "energy-icons:arrow-right-48-bold",
	});
}

export default Component;
