import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtmc67bsf.css';
import '../../css/l/l6g1gqb7e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtmc67bsf"/><path class="l6g1gqb7e"/>`,
		"fallback": "material-icon-theme:folder-api-open",
	});
}

export default Component;
