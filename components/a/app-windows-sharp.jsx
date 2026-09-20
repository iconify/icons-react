import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o91b5sbba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o91b5sbba"/>`,
		"fallback": "pixelarticons:app-windows-sharp",
	});
}

export default Component;
