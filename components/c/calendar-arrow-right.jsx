import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcvup4r4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcvup4r4m"/>`,
		"fallback": "noviair:calendar-arrow-right",
	});
}

export default Component;
