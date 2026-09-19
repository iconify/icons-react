import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luh-ytb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luh-ytb6v"/>`,
		"fallback": "cbi:cowboy-ebike",
	});
}

export default Component;
