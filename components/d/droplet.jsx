import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os4wsf10g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os4wsf10g"/>`,
		"fallback": "at-icons:droplet",
	});
}

export default Component;
