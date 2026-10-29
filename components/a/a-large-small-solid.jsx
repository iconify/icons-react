import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukdrheb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukdrheb9t"/>`,
		"fallback": "withicons:a-large-small-solid",
	});
}

export default Component;
