import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3bstg6yn.css';
import '../../css/h/h4fi9ef0g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3bstg6yn"/><path class="h4fi9ef0g"/>`,
		"fallback": "energy-icons:git-commit-48",
	});
}

export default Component;
