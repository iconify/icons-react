import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-bc1ybft.css';
import '../../css/a/a394r9b2o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-bc1ybft"/><path class="a394r9b2o"/>`,
		"fallback": "energy-icons:calendar-check-20",
	});
}

export default Component;
