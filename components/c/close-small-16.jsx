import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_mzvy6rk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_mzvy6rk"/>`,
		"fallback": "qlementine-icons:close-small-16",
	});
}

export default Component;
