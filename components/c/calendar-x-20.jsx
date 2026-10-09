import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-bc1ybft.css';
import '../../css/r/rqm6u7mkv.css';
import '../../css/t/t8og4ac6k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-bc1ybft"/><path class="rqm6u7mkv"/><path class="t8og4ac6k"/>`,
		"fallback": "energy-icons:calendar-x-20",
	});
}

export default Component;
