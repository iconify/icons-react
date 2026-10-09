import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1middb0q.css';
import '../../css/o/o42c9jpgu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1middb0q"/><path class="o42c9jpgu"/>`,
		"fallback": "energy-icons:dishwasher-20",
	});
}

export default Component;
