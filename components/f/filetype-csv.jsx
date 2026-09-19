import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gom3s0blz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gom3s0blz"/>`,
		"fallback": "bi:filetype-csv",
	});
}

export default Component;
