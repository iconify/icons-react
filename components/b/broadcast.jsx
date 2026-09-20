import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t669neb7o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t669neb7o"/>`,
		"fallback": "octicon:broadcast",
	});
}

export default Component;
