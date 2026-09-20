import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnyd66bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnyd66bmx"/>`,
		"fallback": "keyline-icons:broom-sharp",
	});
}

export default Component;
