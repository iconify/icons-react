import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8ompabgh.css';
import '../../css/i/il_8vobti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8ompabgh"/><path class="il_8vobti"/>`,
		"fallback": "bx:bxs-chess",
	});
}

export default Component;
