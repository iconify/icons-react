import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-bc1ybft.css';
import '../../css/f/f5keg8bhn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-bc1ybft"/><path class="f5keg8bhn"/>`,
		"fallback": "energy-icons:calendar-20",
	});
}

export default Component;
