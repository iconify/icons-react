import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcefzjfcf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcefzjfcf"/>`,
		"fallback": "material-icon-theme:chromatic",
	});
}

export default Component;
