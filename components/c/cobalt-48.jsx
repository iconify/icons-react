import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze82bcb9d.css';
import '../../css/u/u2nqzrsoj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze82bcb9d"/><path class="u2nqzrsoj"/>`,
		"fallback": "energy-icons:cobalt-48",
	});
}

export default Component;
