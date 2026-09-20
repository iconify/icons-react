import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvhh-_bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fvhh-_bcx"/>`,
		"fallback": "streamline-sharp:candle-solid",
	});
}

export default Component;
