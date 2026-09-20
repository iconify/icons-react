import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpd5dzuzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lpd5dzuzf"/>`,
		"fallback": "streamline-sharp:dark-display-mode-solid",
	});
}

export default Component;
