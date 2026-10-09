import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay0q9u-4z.css';
import '../../css/q/q4-w0wbwt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay0q9u-4z"/><path class="q4-w0wbwt"/>`,
		"fallback": "energy-icons:hot-dog-48",
	});
}

export default Component;
