import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd2ockczu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd2ockczu"/>`,
		"fallback": "dinkie-icons:desert-island",
	});
}

export default Component;
