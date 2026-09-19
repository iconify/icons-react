import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gap8vwbnj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gap8vwbnj"/>`,
		"fallback": "dinkie-icons:beaker-filled",
	});
}

export default Component;
