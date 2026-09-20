import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhwamkbws.css';
import '../../css/d/dtnoc5ijb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhwamkbws"/><path class="dtnoc5ijb"/>`,
		"fallback": "stash:image-arrow-up-duotone",
	});
}

export default Component;
