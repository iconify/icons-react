import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3pjgcbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3pjgcbnv"/>`,
		"fallback": "cbi:bulb-group-lightstrip-v",
	});
}

export default Component;
