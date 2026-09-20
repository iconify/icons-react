import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0prf1r2a.css';
import '../../css/c/c1xpauj8c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0prf1r2a"/><path class="c1xpauj8c"/>`,
		"fallback": "material-icon-theme:folder-lib",
	});
}

export default Component;
