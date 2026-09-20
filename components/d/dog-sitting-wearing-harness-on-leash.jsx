import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzw_ce6aq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzw_ce6aq"/>`,
		"fallback": "pinhead:dog-sitting-wearing-harness-on-leash",
	});
}

export default Component;
