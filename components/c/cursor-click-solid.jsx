import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu0z4-bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tu0z4-bnc"/>`,
		"fallback": "streamline-sharp:cursor-click-solid",
	});
}

export default Component;
