import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck9oiac6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck9oiac6f"/>`,
		"fallback": "roentgen:hazelnut-with-leaves",
	});
}

export default Component;
