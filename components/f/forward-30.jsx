import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-x0dsblc.css';
import '../../css/y/ydysvhh_f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-x0dsblc"/><path class="ydysvhh_f"/>`,
		"fallback": "carbon:forward-30",
	});
}

export default Component;
