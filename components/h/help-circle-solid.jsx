import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc_2rzbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rc_2rzbpe"/>`,
		"fallback": "iconoir:help-circle-solid",
	});
}

export default Component;
