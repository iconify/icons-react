import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxsv32zcv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxsv32zcv"/>`,
		"fallback": "at-icons:flintlock",
	});
}

export default Component;
