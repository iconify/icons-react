import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thk55vbks.css';
import '../../css/o/o6e3x-bef.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thk55vbks"/><path class="o6e3x-bef"/>`,
		"fallback": "garden:flag-fill-16",
	});
}

export default Component;
