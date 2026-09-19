import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lftu6m2lk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lftu6m2lk"/>`,
		"fallback": "at-icons:banner",
	});
}

export default Component;
