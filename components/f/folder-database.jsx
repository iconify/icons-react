import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljf7d2blh.css';
import '../../css/r/r-proe0do.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljf7d2blh"/><path class="r-proe0do"/>`,
		"fallback": "material-icon-theme:folder-database",
	});
}

export default Component;
