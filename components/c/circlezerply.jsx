import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tms9ahb5g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tms9ahb5g"/>`,
		"fallback": "whh:circlezerply",
	});
}

export default Component;
