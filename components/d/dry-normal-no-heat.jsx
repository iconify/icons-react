import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjzw_-b3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjzw_-b3f"/>`,
		"fallback": "ps:dry-normal-no-heat",
	});
}

export default Component;
