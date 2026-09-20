import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrtxn5dxc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrtxn5dxc"/>`,
		"fallback": "material-icon-theme:hurl",
	});
}

export default Component;
