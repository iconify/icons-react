import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5e0hoqob.css';
import '../../css/x/x1tzk_mhq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5e0hoqob"/><path class="x1tzk_mhq"/>`,
		"fallback": "energy-icons:bathtub-20-bold",
	});
}

export default Component;
