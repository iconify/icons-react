import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlk1-zbma.css';
import '../../css/l/l016wdj-z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlk1-zbma"/><path class="l016wdj-z"/>`,
		"fallback": "energy-icons:book-open-20",
	});
}

export default Component;
