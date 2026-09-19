import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmj6onr3b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmj6onr3b"/>`,
		"fallback": "bi:diagram-2",
	});
}

export default Component;
