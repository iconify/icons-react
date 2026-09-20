import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8gqn_bfy.css';
import '../../css/u/uxjr5m63m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8gqn_bfy"/><path class="uxjr5m63m"/>`,
		"fallback": "material-icon-theme:folder-controller-open",
	});
}

export default Component;
