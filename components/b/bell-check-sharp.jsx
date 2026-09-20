import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3p8yx2tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3p8yx2tq"/>`,
		"fallback": "keyline-icons:bell-check-sharp",
	});
}

export default Component;
