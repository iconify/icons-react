import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdv_6bbog.css';
import '../../css/i/iz2obhzwv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdv_6bbog"/><path class="iz2obhzwv"/>`,
		"fallback": "carbon:calendar-add",
	});
}

export default Component;
