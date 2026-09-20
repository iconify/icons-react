import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dazllrb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dazllrb5l"/>`,
		"fallback": "thesvg-color:dota-2",
	});
}

export default Component;
