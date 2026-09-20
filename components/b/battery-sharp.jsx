import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ombxg13qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ombxg13qf"/>`,
		"fallback": "pixelarticons:battery-sharp",
	});
}

export default Component;
