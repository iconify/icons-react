import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv-y-4o-g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv-y-4o-g"/>`,
		"fallback": "dinkie-icons:clipboard-filled",
	});
}

export default Component;
