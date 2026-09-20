import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqm-m2bem.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqm-m2bem"/>`,
		"fallback": "qlementine-icons:arrow-right-16",
	});
}

export default Component;
