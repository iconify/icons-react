import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7-32nbpu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7-32nbpu"/>`,
		"fallback": "pinhead:dog-wearing-collar-on-leash",
	});
}

export default Component;
