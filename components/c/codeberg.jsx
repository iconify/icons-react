import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwot3iucy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwot3iucy"/>`,
		"fallback": "thesvg:codeberg",
	});
}

export default Component;
