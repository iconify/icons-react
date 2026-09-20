import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdl7h5bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdl7h5bjg"/>`,
		"fallback": "keyline-icons:align-offset-left-sharp",
	});
}

export default Component;
