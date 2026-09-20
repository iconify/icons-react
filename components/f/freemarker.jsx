import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbfh8vffk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbfh8vffk"/>`,
		"fallback": "material-icon-theme:freemarker",
	});
}

export default Component;
