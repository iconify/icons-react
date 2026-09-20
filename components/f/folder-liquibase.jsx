import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajw-j-mwd.css';
import '../../css/f/fplzncgdx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajw-j-mwd"/><path class="fplzncgdx"/>`,
		"fallback": "material-icon-theme:folder-liquibase",
	});
}

export default Component;
