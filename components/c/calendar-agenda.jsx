import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoxey7spe.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoxey7spe"/>`,
		"fallback": "fluent-mdl2:calendar-agenda",
	});
}

export default Component;
