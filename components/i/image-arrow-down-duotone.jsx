import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhwamkbws.css';
import '../../css/o/ox3sqx-4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhwamkbws"/><path class="ox3sqx-4a"/>`,
		"fallback": "stash:image-arrow-down-duotone",
	});
}

export default Component;
