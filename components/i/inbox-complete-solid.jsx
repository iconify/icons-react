import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3hw_dbub.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3hw_dbub"/>`,
		"fallback": "rivet-icons:inbox-complete-solid",
	});
}

export default Component;
