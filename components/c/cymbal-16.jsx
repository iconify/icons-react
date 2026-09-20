import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g43gpwl4q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g43gpwl4q"/>`,
		"fallback": "qlementine-icons:cymbal-16",
	});
}

export default Component;
