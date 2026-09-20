import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcirovbzd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcirovbzd"/>`,
		"fallback": "material-icon-theme:advpl",
	});
}

export default Component;
