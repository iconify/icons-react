import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-bc1ybft.css';
import '../../css/a/a99zzxb0t.css';
import '../../css/f/fp91mvbdk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-bc1ybft"/><path class="a99zzxb0t"/><path class="fp91mvbdk"/>`,
		"fallback": "energy-icons:calendar-plus-20",
	});
}

export default Component;
