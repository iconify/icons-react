import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv8ehtyui.css';
import '../../css/a/afwi5ac4o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv8ehtyui"/><path class="afwi5ac4o"/>`,
		"fallback": "energy-icons:chalkboard-20-bold",
	});
}

export default Component;
