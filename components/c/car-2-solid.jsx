import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcus68cnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gcus68cnc"/>`,
		"fallback": "streamline-sharp:car-2-solid",
	});
}

export default Component;
