import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jywom88oh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jywom88oh"/>`,
		"fallback": "fluent-mdl2:calendar-week",
	});
}

export default Component;
