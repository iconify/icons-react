import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbg7o3_pr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbg7o3_pr"/>`,
		"fallback": "pinhead:inclined-information-panel",
	});
}

export default Component;
