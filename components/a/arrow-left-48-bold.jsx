import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilg_98b5z.css';
import '../../css/r/r9g8q-bah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilg_98b5z"/><path class="r9g8q-bah"/>`,
		"fallback": "energy-icons:arrow-left-48-bold",
	});
}

export default Component;
