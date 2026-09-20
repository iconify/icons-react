import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8qgey2bj.css';
import '../../css/r/r-proe0do.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8qgey2bj"/><path class="r-proe0do"/>`,
		"fallback": "material-icon-theme:folder-database-open",
	});
}

export default Component;
