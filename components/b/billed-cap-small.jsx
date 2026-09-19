import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqjjdx6vg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqjjdx6vg"/>`,
		"fallback": "dinkie-icons:billed-cap-small",
	});
}

export default Component;
