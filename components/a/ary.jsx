import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aupr_dbky.css';
import '../../css/b/b83ftieom.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="aupr_dbky"/><path class="b83ftieom"/></g>`,
		"fallback": "cryptocurrency-color:ary",
	});
}

export default Component;
