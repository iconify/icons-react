import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeuiky0sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeuiky0sr"/>`,
		"fallback": "streamline-sharp:arrow-diagonal-2",
	});
}

export default Component;
