import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqyoi2ukf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqyoi2ukf"/>`,
		"fallback": "cbi:bulb-group-wall-nyro-flood",
	});
}

export default Component;
