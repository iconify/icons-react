import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6_kf7bqk.css';
import '../../css/n/nwovjeb2e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6_kf7bqk"/><path class="nwovjeb2e"/>`,
		"fallback": "material-icon-theme:folder-link",
	});
}

export default Component;
