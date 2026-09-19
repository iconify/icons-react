import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4_cu0b4c.css';
import '../../css/f/fvtev__4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4_cu0b4c"/><path class="fvtev__4k"/>`,
		"fallback": "bxs:chevrons-up",
	});
}

export default Component;
