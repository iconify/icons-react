import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf9mlfk3q.css';
import '../../css/t/tqy8z_h5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf9mlfk3q"/><path class="tqy8z_h5z"/>`,
		"fallback": "energy-icons:git-commit-48-bold",
	});
}

export default Component;
