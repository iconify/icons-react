import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgdq4zzsk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgdq4zzsk"/>`,
		"fallback": "fa7-solid:bullhorn",
	});
}

export default Component;
