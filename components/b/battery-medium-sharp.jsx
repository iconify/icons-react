import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvu-1h28a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvu-1h28a"/>`,
		"fallback": "keyline-icons:battery-medium-sharp",
	});
}

export default Component;
