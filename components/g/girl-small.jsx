import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1ly0bcpc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1ly0bcpc"/>`,
		"fallback": "dinkie-icons:girl-small",
	});
}

export default Component;
