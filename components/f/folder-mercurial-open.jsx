import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzh5w72co.css';
import '../../css/i/ixz4scd6c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzh5w72co"/><path class="ixz4scd6c"/>`,
		"fallback": "material-icon-theme:folder-mercurial-open",
	});
}

export default Component;
