import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za8ehjb1q.css';
import '../../css/n/n_757dk6o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za8ehjb1q"/><path class="n_757dk6o"/>`,
		"fallback": "carbon:calendar-settings",
	});
}

export default Component;
